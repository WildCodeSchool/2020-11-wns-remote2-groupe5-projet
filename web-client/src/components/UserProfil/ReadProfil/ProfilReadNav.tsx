import React, { useContext } from 'react';
import Degrees from './Degrees';
import Experiences from './Experiences';
import Informations from './Informations';
import GlobalContext from '../../../contexts/GlobalContext';


export default function ProfilReadNav({ data }: { data: any }): JSX.Element {
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
