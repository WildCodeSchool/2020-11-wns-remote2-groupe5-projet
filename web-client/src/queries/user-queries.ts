import { gql } from '@apollo/client';

export const AUTH = gql`
  mutation createSession($input: CreateSessionInput!) {
    createSession(input: $input) {
      pseudo
      userID
    }
  }
`;

export const CHECK_AUTH = gql`
  query Me {
    me {
      pseudo
    }
  }
`;

export const LOG_OUT = gql`
  mutation {
    deleteSession {
      userID
    }
  }
`;
