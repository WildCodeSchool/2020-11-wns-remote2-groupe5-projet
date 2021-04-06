import React, { useContext } from 'react';
import Degrees from './ProfilViewPages/Degrees';
import Experiences from './ProfilViewPages/Experiences';
import GlobalContext from '../../../../../utils/GlobalContext';
import Informations from './ProfilViewPages/Informations';

export default function ProfilView(): JSX.Element {
  const context = useContext(GlobalContext);

  return (
    <div>
      {context.actualPage == 'Informations générales' && <Informations />}
      {context.actualPage == 'Expériences' && <Experiences />}
      {context.actualPage == 'Diplômes' && <Degrees />}
    </div>
  );
}
