import React, { useContext } from 'react';
import Degrees from './ProfilViewPages/Degrees';
import Experiences from './ProfilViewPages/Experiences';
import Informations from './ProfilViewPages/Informations';
import GlobalContext from '../../../../../utils/GlobalContext';
import './ProfilView.css';

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
