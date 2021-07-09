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
      userID
    }
  }
`;

export const USER_INFO = gql`
  query UserInfo {
    me {
      pseudo
      age
      email
      phoneNumber
      bio
      avatarFileName
      communities {
        communityID
        community
      }
      experiences {
        jobName
        company
        dateStart
        dateEnd
        isActualJob
        description
      }
      diplomas {
        diplomaName
        school
        dateStart
        dateEnd
        isActualSchool
        description
      }
    }
  }
`;

export const EDIT_PROFIL = gql`
  mutation ProfilUpdate(
    $data: CreateUserInput!
    $communities: [CreateCommunityInput!]
  ) {
    updateUserInfos(data: $data, communities: $communities) {
      pseudo
      age
      email
      phoneNumber
      bio
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn(
    $data: CreateUserInput!
    $communities: [CreateCommunityInput!]
  ) {
    signIn(data: $data, communities: $communities) {
      pseudo
      communities {
        communityID
        community
      }
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
      avatarFileName
      email
    }
  }
`;
