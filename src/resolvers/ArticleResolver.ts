import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import CreateArticleInput from '../inputs/CreateArticleInput';
import CreateContentFieldInput from '../inputs/CreateContentFieldInput';
import Article from '../models/Article';
import ContentField from '../models/ContentField';

@Resolver()
export default class ArticleResolver {
  @Query(() => [Article])
  articles(): Promise<Article[]> {
    return Article.find({
      relations: ['user', 'contentFields', 'contentFields.contentType'],
    });
  }

  @Mutation(() => Article)
  async createArticle(
    @Arg('data') data: CreateArticleInput,
    @Arg('fields', () => [CreateContentFieldInput])
    fields: CreateContentFieldInput[]
  ): Promise<Article> {
    const article = Article.create(data);

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
