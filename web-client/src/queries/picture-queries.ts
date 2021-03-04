import { gql } from '@apollo/client';

export const UPLOAD_AVATAR = gql`
  mutation UploadAvatar($file: Upload!) {
    uploadAvatar(file: $file) {
      id
      extension
    }
  }
`;
