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

export const SIGN_IN = gql`
  mutation signIn($data: CreateUserInput!) {
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
  mutation {
    deleteSession {
      userID
    }
  }
`;

export const GET_ALL_USERS = gql`
  query allUsers {
    allUsers {
      pseudo
      email
    }
  }
`;
