import React, { useContext } from 'react';
import InformationModification from './ProfilModificationPages/InformationModification';
import ExperienceModification from './ProfilModificationPages/ExperienceModification';
import DegreeModification from './ProfilModificationPages/DegreeModification';

import './ProfilModification.css';
import GlobalContext from '../../../../../utils/GlobalContext';

export default function ProfilModification(): JSX.Element {
  const context = useContext(GlobalContext);

  return (
    <div>
      {context.actualPage == 'Informations générales' && (
        <InformationModification />
      )}
      {context.actualPage == 'Expériences' && <ExperienceModification />}
      {context.actualPage == 'Diplômes' && <DegreeModification />}
    </div>
  );
}
