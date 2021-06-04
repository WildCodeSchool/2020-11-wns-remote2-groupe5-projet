import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  split,
} from '@apollo/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './tailwind.output.css';
import { ChakraProvider } from '@chakra-ui/react';
import { WebSocketLink } from '@apollo/client/link/ws';
import { createUploadLink } from 'apollo-upload-client';
import './index.css';
import { getMainDefinition } from '@apollo/client/utilities';
require('dotenv').config();

const GRAPHQL_ENDPOINT = '/graphql';

const httpLink = createUploadLink({
  uri: GRAPHQL_ENDPOINT,
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:${process.env.NODE_ENV === 'development' ? '4000' : '8000'}${GRAPHQL_ENDPOINT}`,
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

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
