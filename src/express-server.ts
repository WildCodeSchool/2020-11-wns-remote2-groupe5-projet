import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import { getApolloServer } from './apollo-server';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { GraphQLSchema } from 'graphql';
import { graphqlUploadExpress } from 'graphql-upload';

export const getExpressServer = async (): Promise<{
  expressServer: Application;
  apolloServer: ApolloServer;
  graphQLSchema: GraphQLSchema;
}> => {
  const { apolloServer, graphQLSchema } = await getApolloServer();

  const expressServer = express()
    .use(cookieParser())
    .use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))
    .use('/public', express.static(path.join(__dirname, '..', 'public')));
  apolloServer.applyMiddleware({ app: expressServer });

  return { expressServer, apolloServer, graphQLSchema };
};
