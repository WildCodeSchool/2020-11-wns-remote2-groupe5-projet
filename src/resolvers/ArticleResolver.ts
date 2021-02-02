import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import CreateArticleInput from '../inputs/CreateArticleInput';
import CreateContentFieldInput from '../inputs/CreateContentFieldInput';
import Article from '../models/Article';
import ContentField from '../models/ContentField';
import User from '../models/User';

@Resolver()
export default class ArticleResolver {
  @Query(() => [Article])
  articles(): Promise<Article[]> {
    return Article.find({
      relations: ['user', 'contentFields'],
    });
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
