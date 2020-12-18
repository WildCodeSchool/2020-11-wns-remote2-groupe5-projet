import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import { getApolloServer } from './apollo-server';
import { ApolloServer } from 'apollo-server-express';

export const getExpressServer = async (): Promise<{
  expressServer: Application;
  apolloServer: ApolloServer;
}> => {
  const apolloServer = await getApolloServer();

  const expressServer = express().use(cookieParser());
  apolloServer.applyMiddleware({ app: expressServer });
  return { expressServer, apolloServer };
};
