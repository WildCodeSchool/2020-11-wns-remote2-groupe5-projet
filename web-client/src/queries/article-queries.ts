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
      commentairesArticle {
        commentaire
        date
        user {
          userID
          pseudo
        }
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment(
    $articleID: String!
    $date: DateTime!
    $commentaire: String!
  ) {
    createCommentaireArticle(
      articleID: $articleID
      data: { date: $date, commentaire: $commentaire }
    ) {
      article {
        articleID
      }
      commentaire
      date
    }
  }
`;
