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
