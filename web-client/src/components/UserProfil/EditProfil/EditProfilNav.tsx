import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import EditDegree from './EditDegree';
import EditExperience from './EditExperience';
import EditInformations from './EditInformations';

export default function EditProfilNav(): JSX.Element {
  const { actualPage } = useContext(CurrentUserContext);

  return (
    <Box>
      {actualPage === 'informations' && <EditInformations />}
      {actualPage === 'experiences' && <EditExperience />}
      {actualPage === 'diplomas' && <EditDegree />}
    </Box>
  );
}
