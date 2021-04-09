import { gql } from '@apollo/client';

export const EDIT_PROFIL = gql`
  mutation EditProfil($profil: [EditProfilInput!]!) {
    EditProfil(profil: $profil) {
      pseudo
    }
  }
`;

export const CREATE_EXPERIENCES = gql`
  mutation CreateExperiences($experiences: [CreateExperienceInput!]!) {
    createExperiences(experiences: $experiences) {
      jobName
    }
  }
`;

export const CREATE_DIPLOMAS = gql`
  mutation CreateDiplomas($diplomas: [CreateDiplomaInput!]!) {
    CreateDiplomas(diplomas: $diplomas) {
      jobName
    }
  }
`;
