import React, { useContext } from 'react';
import Degrees from './Degrees';
import Experiences from './Experiences';
import Informations from './Informations';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

export default function ProfilReadNav(): JSX.Element {
  const { actualPage, currentUser } = useContext(CurrentUserContext);
  console.log('profil', currentUser?.communities);
  return (
    <div>
      {actualPage === 'informations' && (
        <Informations
          informations={{
            pseudo: currentUser?.pseudo!,
            age: currentUser?.age!,
            avatarFileName: currentUser?.avatarFileName!,
            email: currentUser?.email!,
            phoneNumber: currentUser?.phoneNumber!,
            bio: currentUser?.bio!,
            communities: currentUser?.communities!,
          }}
        />
      )}
      {actualPage === 'experiences' && (
        <Experiences experiences={currentUser?.experiences!} />
      )}
      {actualPage === 'diplomas' && (
        <Degrees diplomas={currentUser?.diplomas!} />
      )}
    </div>
  );
}
