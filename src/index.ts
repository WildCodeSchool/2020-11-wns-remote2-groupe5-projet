import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';

import { getExpressServer } from './express-server';
import { SubscriptionServer } from 'subscriptions-transport-ws';

const main = async () => {
  await createConnection();

  const {
    expressServer,
    apolloServer,
    graphQLSchema,
  } = await getExpressServer();

  const server = createServer(expressServer);
  server.listen(4000, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
    );
    // Set up the WebSocket for handling GraphQL subscriptions
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema: graphQLSchema,
      },
      {
        server,
        path: apolloServer.graphqlPath,
      }
    );
  });
};

main();
