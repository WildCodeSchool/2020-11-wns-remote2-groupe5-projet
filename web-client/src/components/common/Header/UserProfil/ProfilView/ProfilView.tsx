import React, { useContext } from 'react';
import Degrees from './ProfilViewPages/Degrees';
import Experiences from './ProfilViewPages/Experiences';
import Informations from './ProfilViewPages/Informations';
import GlobalContext from '../../../../../utils/GlobalContext';

import './ProfilView.css';

export default function ProfilView({ data }: { data: any }): JSX.Element {
  const context = useContext(GlobalContext);

  return (
    <div>
      {context.actualPage == 'Informations générales' && (
        <Informations data={data} />
      )}
      {context.actualPage == 'Expériences' && <Experiences data={data} />}
      {context.actualPage == 'Diplômes' && <Degrees data={data} />}
    </div>
  );
}
