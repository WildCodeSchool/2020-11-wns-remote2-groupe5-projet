import { gql } from '@apollo/client';

export const PUBLISH_ARTICLE = gql`
  mutation CreateArticle(
    $data: CreateArticleInput!
    $fields: [CreateContentFieldInput!]!
  ) {
    createArticle(data: $data, fields: $fields) {
      articleID
      userID
      date
      contentFields {
        content
      }
    }
  }
`;

export const GET_ALL_ARTICLES = gql`
  query Articles {
    articles {
      articleID
      likesArticle {
        likeID
        user {
          userID
        }
      }
      date
      title
      description
      user {
        pseudo
      }
      contentFields {
        content
        contentType
        placeNumber
      }
    }
  }
`;

export const GET_ONE_BY_ID = gql`
  query OneArticle($articleID: String!) {
    oneArticle(articleID: $articleID) {
      likesArticle {
        likeID
        user {
          userID
        }
      }
      articleID
      title
      description
      date
      user {
        pseudo
      }
      contentFields {
        contentFieldID
        contentType
        content
        placeNumber
      }
    }
  }
`;

export const LIKE_ARTICLE = gql`
  mutation LikeArticle($articleID: String!) {
    likeArticle(articleID: $articleID) {
      userID
    }
  }
`;
