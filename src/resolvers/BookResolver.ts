import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import CreateBookInput from '../inputs/CreateBookInput';
import Book from '../models/Book';

@Resolver()
export default class BookResolver {
  @Query(() => [Book])
  books(): Promise<Book[]> {
    return Book.find();
  }

  @Mutation(() => Book)
  async createBook(@Arg('data') data: CreateBookInput): Promise<Book> {
    const book = Book.create(data);
    await book.save();
    return book;
  }
}
