import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import CreateArticleInput from '../inputs/CreateArticleInput';
import CreateCommentaireArticleInput from '../inputs/CreateCommentaireArticleInput';
import CreateContentFieldInput from '../inputs/CreateContentFieldInput';
import Article from '../models/Article';
import CommentaireArticle from '../models/Commentaire_Article';
import ContentField from '../models/ContentField';
import User from '../models/User';

@Resolver()
export default class ArticleResolver {
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
    @Arg('articleID') articleID: string
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

    return commentaire;
  }
}
