import { gql } from '@apollo/client';

export const UPLOAD_PICTURE = gql`
  mutation UploadPicture($file: Upload!) {
    uploadPicture(file: $file) {
      avatarID
      userID
      extension
    }
  }
`;
