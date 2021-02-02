import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import CreateArticleInput from '../inputs/CreateArticleInput';
import CreateContentFieldInput from '../inputs/CreateContentFieldInput';
import Article from '../models/Article';
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
      relations: ['user', 'contentFields'],
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
      relations: ['user', 'contentFields'],
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
}
