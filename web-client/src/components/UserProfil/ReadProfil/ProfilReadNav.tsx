import React, { useContext } from 'react';
import Degrees from './Degrees';
import Experiences from './Experiences';
import Informations from './Informations';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';


export default function ProfilReadNav({ data }: { data: any }): JSX.Element {
  const {actualPage} = useContext(CurrentUserContext);

  return (
    <div>
      {actualPage == 'Informations générales' && (
        <Informations data={data} />
      )}
      {actualPage == 'Expériences' && <Experiences data={data} />}
      {actualPage == 'Diplômes' && <Degrees data={data} />}
    </div>
  );
}
