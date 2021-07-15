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
import { getConnection } from 'typeorm';
import CreateArticleInput from '../inputs/CreateArticleInput';
import CreateCommentaireArticleInput from '../inputs/CreateCommentaireArticleInput';
import CreateCommunityInput from '../inputs/CreateCommunityInput';
import CreateContentFieldInput from '../inputs/CreateContentFieldInput';
import Article from '../models/Article';
import CommentaireArticle from '../models/Commentaire_Article';
import Community from '../models/Community';
import ContentField from '../models/ContentField';
import LikeArticle from '../models/LikeArticle';
import User from '../models/User';

type newCommentNotificationPayload = {
  payload: CommentaireArticle;
};

@Resolver()
export default class ArticleResolver {
  @Subscription({
    topics: 'NEW_COMMENT',
  })
  subscribeToNewComment(
    @Root() notificationPayload: newCommentNotificationPayload
  ): CommentaireArticle {
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
        'community',
      ],
      order: {
        date: 'DESC',
      },
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
        'community',
      ],
    }) as Promise<Article>;
  }

  @Mutation(() => Article)
  async createArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('data') data: CreateArticleInput,
    @Arg('fields', () => [CreateContentFieldInput])
    fields: CreateContentFieldInput[],
    @Arg('community', () => CreateCommunityInput, { nullable: true })
    community: CreateCommunityInput | null
  ): Promise<Article> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    const article = Article.create(data);

    if (community) {
      const savedCommunity = Community.create(community);
      await savedCommunity.save();
      article.community = savedCommunity;
    }

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

  @Mutation(() => Article)
  async deleteArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('articleID') articleID: string
  ): Promise<string> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(CommentaireArticle)
      .where('articleID = :id', { id: articleID })
      .execute();

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(LikeArticle)
      .where('articleID = :id', { id: articleID })
      .execute();

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(ContentField)
      .where('articleID = :id', { id: articleID })
      .execute();

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Article)
      .where('articleID = :id', { id: articleID })
      .execute();

    return articleID;
    // return Article.findOne(articleID) as Promise<Article>;
  }

  @Mutation(() => CommentaireArticle)
  async createCommentaireArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('data') data: CreateCommentaireArticleInput,
    @Arg('articleID') articleID: string,
    @PubSub('NEW_COMMENT')
    publishNewComment: Publisher<newCommentNotificationPayload>
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

  @Query(() => Boolean)
  async isArticleLiked(
    @Ctx() { user }: { user: User | null },
    @Arg('articleID') articleID: string
  ): Promise<boolean> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    const article = await Article.findOne(articleID);

    if (!article) {
      throw Error('Article inexistant');
    }

    const isLiked = await LikeArticle.findOne({
      where: { article, user },
      relations: ['user'],
    });

    if (isLiked) return true;
    return false;
  }

  @Mutation(() => User)
  async switchLikeArticle(
    @Ctx() { user }: { user: User | null },
    @Arg('articleID') articleID: string
  ): Promise<User> {
    if (!user) {
      throw Error('You are not authenticated.');
    }

    const article = await Article.findOne(articleID);

    if (!article) {
      throw Error('Article inexistant');
    }

    const currentLike = await LikeArticle.findOne({
      where: { article, user },
      relations: ['user'],
    });

    if (!currentLike) {
      const newLike = LikeArticle.create();
      newLike.article = article;
      newLike.user = user;
      await newLike.save();
    }

    if (currentLike) {
      await currentLike.remove();
    }

    return user;
  }
}
