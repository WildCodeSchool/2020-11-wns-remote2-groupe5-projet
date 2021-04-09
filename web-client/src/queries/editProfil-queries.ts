import { gql } from '@apollo/client';

export const CREATE_EXPERIENCES = gql`
  mutation CreateExperiences($experiences: [CreateExperienceInput!]!) {
    createExperiences(experiences: $experiences) {
      jobName
    }
  }
`;

export const CREATE_DIPLOMAS = gql`
  mutation createDiploma($diplomas: [CreateDiplomaInput!]!) {
    createDiplomas(diplomas: $diplomas) {
      diplomaID
    }
  }
`;
