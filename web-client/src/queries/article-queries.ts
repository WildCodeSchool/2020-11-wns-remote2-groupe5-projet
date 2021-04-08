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
      commentairesArticle {
        user {
          userID
        }
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
      commentairesArticle {
        contentFieldID
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

export const LIKE_ARTICLE = gql`
  mutation LikeArticle($articleID: String!) {
    likeArticle(articleID: $articleID) {
      likeID
      user {
        userID
      }
    }
  }
`;

export const DISLIKE_ARTICLE = gql`
  mutation DislikeArticle($articleID: String!) {
    dislikeArticle(articleID: $articleID)
  }
`;

export const SUBSCRIBE_TO_NEW_COMMENT = gql`
  subscription NewComment {
    newComment {
      contentFieldID
      commentaire
      date
      user {
        userID
        pseudo
      }
    }
  }
`;

export const SUBSCRIBE_TO_NEW_LIKE = gql`
  subscription NewLike {
    newLike {
      likeID
      user {
        userID
      }
    }
  }
`;

export const SUBSCRIBE_TO_REMOVE_LIKE = gql`
  subscription RemoveLike {
    removeLike {
      likeID
      user {
        userID
      }
    }
  }
`;
