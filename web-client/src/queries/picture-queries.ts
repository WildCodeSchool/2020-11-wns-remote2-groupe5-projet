import { gql } from '@apollo/client';

export const UPLOAD_AVATAR = gql`
  mutation UploadAvatar($file: Upload!) {
    uploadAvatar(file: $file) {
      id
      extension
    }
  }
`;

export const UPLOAD_ARTICLE_PICTURE = gql`
  mutation UploadArticlePicture(
    $file: Upload!
    $articleId: String!
    $fileName: String!
  ) {
    uploadArticlePicture(
      file: $file
      articleId: $articleId
      fileName: $fileName
    ) {
      id
      extension
    }
  }
`;
