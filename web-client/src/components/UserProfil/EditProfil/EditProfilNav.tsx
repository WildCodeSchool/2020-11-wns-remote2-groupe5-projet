import React, { useContext } from 'react';


import GlobalContext, { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import EditDegree from './EditDegree';
import EditExperience from './EditExperience';
import EditInformations from './EditInformations';

export default function EditProfilNav(): JSX.Element {
  const {actualPage, setActualPage} = useContext(CurrentUserContext);

  return (
    <div>
      {actualPage == 'Informations générales' && (
        <EditInformations />
      )}
      {actualPage == 'Expériences' && <EditExperience />}
      {actualPage == 'Diplômes' && <EditDegree />}
    </div>
  );
}
