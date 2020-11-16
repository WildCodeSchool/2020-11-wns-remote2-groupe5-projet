import { Resolver, Query } from 'type-graphql';
import Book from '../models/Book';

@Resolver()
export default class BookResolver {
  @Query(() => [Book])
  books(): Promise<Book[]> {
    return Book.find();
  }
}
