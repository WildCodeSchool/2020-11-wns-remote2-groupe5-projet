import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  Subscription,
  Root,
  PubSub,
  Publisher,
} from 'type-graphql';
import CreateArticleInput from '../inputs/CreateArticleInput';
import CreateCommentaireArticleInput from '../inputs/CreateCommentaireArticleInput';
import CreateContentFieldInput from '../inputs/CreateContentFieldInput';
import Article from '../models/Article';
import CommentaireArticle from '../models/Commentaire_Article';
import ContentField from '../models/ContentField';
import LikeArticle from '../models/LikeArticle';
import User from '../models/User';

type NewCommentNotificationPayload = {
  payload: CommentaireArticle;
};

type NewLikeNotificationPayload = {
  payload: LikeArticle;
};

type RemoveLikeNotificationPayload = {
  payload: LikeArticle;
};

@Resolver()
export default class ArticleResolver {
  @Subscription({
    topics: 'NEW_COMMENT',
  })
  newComment(
    @Root() notificationPayload: NewCommentNotificationPayload
  ): CommentaireArticle {
    return notificationPayload.payload;
  }

  @Subscription({
    topics: 'NEW_LIKE',
  })
  newLike(
    @Root() notificationPayload: NewLikeNotificationPayload
  ): LikeArticle {
    return notificationPayload.payload;
  }

  @Subscription({
    topics: 'REMOVE_LIKE',
  })
  removeLike(
    @Root() notificationPayload: RemoveLikeNotificationPayload
  ): LikeArticle {
    return notificationPayload.payload;
  }

  @Query(() => [Article])
  articles(@Ctx() { user }: { user: User | null }): Promise<Article[]> {
    if (!user) {
      throw Error('You are not authenticated.');
    }
    return Article.find({
      relations: [
        'user',
        'contentFields',
        'commentairesArticle',
        'commentairesArticle.user',
        'likesArticle',
        'likesArticle.user',
      ],
    });
  }

  @Query(() => Article)
  oneArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('articleID') articleID: string
  ): Promise<Article> {
    if (!user) {
      throw Error('You are not authenticated.');
    }
    return Article.findOne(articleID, {
      relations: [
        'user',
        'likesArticle',
        'likesArticle.user',
        'contentFields',
        'commentairesArticle',
        'commentairesArticle.user',
      ],
    }) as Promise<Article>;
  }

  @Mutation(() => Article)
  async createArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('data') data: CreateArticleInput,
    @Arg('fields', () => [CreateContentFieldInput])
    fields: CreateContentFieldInput[]
  ): Promise<Article> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    const article = Article.create(data);

    article.user = user;

    article.contentFields = await Promise.all(
      fields.map(async (field) => {
        const result = ContentField.create(field);
        await result.save();
        return result;
      })
    );

    await article.save();

    return article;
  }

  @Mutation(() => CommentaireArticle)
  async createCommentaireArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('data') data: CreateCommentaireArticleInput,
    @Arg('articleID') articleID: string,
    @PubSub('NEW_COMMENT')
    publishNewComment: Publisher<NewCommentNotificationPayload>
  ): Promise<CommentaireArticle> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    const commentaire = CommentaireArticle.create(data);

    commentaire.user = user;

    const article = await Article.findOne(articleID);

    if (article) {
      commentaire.article = article;
    }

    await commentaire.save();

    publishNewComment({ payload: commentaire });

    return commentaire;
  }

  @Mutation(() => LikeArticle)
  async likeArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('articleID') articleID: string,
    @PubSub('NEW_LIKE')
    publishNewLike: Publisher<NewLikeNotificationPayload>
  ): Promise<LikeArticle> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    const article = await Article.findOne(articleID);

    if (!article) {
      throw Error('Article inexistant');
    }

    const newLike = LikeArticle.create();

    newLike.article = article;
    newLike.user = user;
    await newLike.save();
    publishNewLike({ payload: newLike });
    return newLike;
  }

  @Mutation(() => Boolean)
  async dislikeArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('articleID') articleID: string,
    @PubSub('REMOVE_LIKE')
    removeLike: Publisher<NewLikeNotificationPayload>
  ): Promise<boolean> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    const article = await Article.findOne(articleID);
    const currentLike = await LikeArticle.findOne({ article, user });

    if (!article || !currentLike) {
      throw Error('Erreur.');
    }

    await currentLike.remove();

    removeLike({ payload: currentLike });

    return true;
  }
}
