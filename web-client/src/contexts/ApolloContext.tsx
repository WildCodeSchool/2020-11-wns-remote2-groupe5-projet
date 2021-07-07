import React, { createContext, useContext, useState } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
  split,
  useQuery,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from '@apollo/client/utilities';
import { CHECK_AUTH } from '../queries/user-queries';
import { useEffect } from 'react';
require('dotenv').config();

const GRAPHQL_ENDPOINT = '/graphql';

const httpLink = createUploadLink({
  uri: GRAPHQL_ENDPOINT,
});

const wsLink = new WebSocketLink({
  uri: `${
    process.env.NODE_ENV === 'development'
      ? 'ws://localhost:4000'
      : document.location.origin.replace('http', 'ws')
  }${GRAPHQL_ENDPOINT}`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

type ApolloContextType = {
  client: ApolloClient<NormalizedCacheObject>;
  // setToken: (token: string) => void;
  // removeToken: () => void;
  // token: string | null;
  isSignedIn: boolean;
};

// @ts-ignore
const ApolloContext = createContext<ApolloContextType>({});

export const ApolloContextProvider: React.FC = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const { data, loading } = useQuery(CHECK_AUTH);

  useEffect(() => {
    if (data) {
      setIsAuthenticate(true);
    }
  }, []);

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloContext.Provider value={{ client, isSignedIn: isAuthenticate }}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ApolloContext.Provider>
  );
};

export const useApollo = () => {
  const ctx = useContext(ApolloContext);
  return ctx;
};
