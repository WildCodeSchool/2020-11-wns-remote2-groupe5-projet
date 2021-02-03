import { gql } from '@apollo/client';

export const PUBLISH_ARTICLE = gql`
  mutation publishArticle(
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
