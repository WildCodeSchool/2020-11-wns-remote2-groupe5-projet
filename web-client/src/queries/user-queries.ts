import { gql } from '@apollo/client';

export const AUTH = gql`
  mutation CreateSession($input: CreateSessionInput!) {
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

export const SIGN_IN = gql`
  mutation SignIn($data: CreateUserInput!) {
    signIn(data: $data) {
      pseudo
      email
      phoneNumber
      age
      city
      bio
    }
  }
`;

export const LOG_OUT = gql`
  mutation DeleteSession {
    deleteSession {
      userID
    }
  }
`;

export const GET_ALL_USERS = gql`
  query AllUsers {
    allUsers {
      pseudo
      email
    }
  }
`;
