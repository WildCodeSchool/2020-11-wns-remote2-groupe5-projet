import React, { useContext } from 'react';


import GlobalContext from '../../../contexts/GlobalContext';
import EditDegree from './EditDegree';
import EditExperience from './EditExperience';
import EditInformations from './EditInformations';

export default function EditProfilNav(): JSX.Element {
  const context = useContext(GlobalContext);

  return (
    <div>
      {context.actualPage == 'Informations générales' && (
        <EditInformations />
      )}
      {context.actualPage == 'Expériences' && <EditExperience />}
      {context.actualPage == 'Diplômes' && <EditDegree />}
    </div>
  );
}
