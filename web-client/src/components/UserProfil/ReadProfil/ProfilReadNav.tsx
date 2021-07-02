import React, { useContext } from 'react';
import Degrees from './Degrees';
import Experiences from './Experiences';
import Informations from './Informations';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';


export default function ProfilReadNav({ data }: { data: any }): JSX.Element {
  const {actualPage} = useContext(CurrentUserContext);

  return (
    <div>
      {actualPage === 'informations' && (
        <Informations data={data} />
      )}
      {actualPage === 'experiences' && <Experiences data={data} />}
      {actualPage === 'diplomas' && <Degrees data={data} />}
    </div>
  );
}
