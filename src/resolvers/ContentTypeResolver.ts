import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import CreateContentTypeInput from '../inputs/CreateContentTypeInput';
import ContentType from '../models/ContentType';

@Resolver()
export default class ContentTypeResolver {
  @Query(() => [ContentType])
  contentTypes(): Promise<ContentType[]> {
    return ContentType.find();
  }

  @Mutation(() => ContentType)
  async createContentType(
    @Arg('data') data: CreateContentTypeInput
  ): Promise<ContentType> {
    const contentType = ContentType.create(data);
    await contentType.save();
    return contentType;
  }
}
