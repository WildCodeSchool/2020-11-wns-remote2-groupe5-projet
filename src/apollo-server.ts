import { ApolloServer } from 'apollo-server-express';
import { Request, Response } from 'express';
import { buildSchema } from 'type-graphql';
import UserSession from './models/UserSession';
import UserResolver from './resolvers/UserResolver';
import ArticleResolver from './resolvers/ArticleResolver';
import ProfilResolver from './resolvers/ProfilResolver';
import PictureResolver from './resolvers/PictureResolver';
import { GraphQLSchema } from 'graphql';

export const getApolloServer = async (): Promise<{
  apolloServer: ApolloServer;
  graphQLSchema: GraphQLSchema;
}> => {
  const schema = await buildSchema({
    resolvers: [UserResolver, ArticleResolver, ProfilResolver, PictureResolver],
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
  return {
    apolloServer: new ApolloServer({ schema, context }),
    graphQLSchema: schema,
  };
};
