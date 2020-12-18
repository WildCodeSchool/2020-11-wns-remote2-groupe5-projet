import { ApolloServer } from 'apollo-server-express';
import { Request, Response } from 'express';
import { buildSchema } from 'type-graphql';
import UserSession from './models/UserSession';
import UserResolver from './resolvers/UserResolver';
import ArticleResolver from './resolvers/ArticleResolver';
import ContentTypeResolver from './resolvers/ContentTypeResolver';

export const getApolloServer = async (): Promise<ApolloServer> => {
  const schema = await buildSchema({
    resolvers: [UserResolver, ArticleResolver, ContentTypeResolver],
  });
  const context = async ({ req, res }: { req: Request; res: Response }) => {
    const { sessionId } = req.cookies;
    const userSession = await UserSession.findOne(
      { uuid: sessionId },
      { relations: ['user'] }
    );
    const user = userSession ? userSession.user : null;

    return {
      res,
      user,
    };
  };
  return new ApolloServer({ schema, context });
};
