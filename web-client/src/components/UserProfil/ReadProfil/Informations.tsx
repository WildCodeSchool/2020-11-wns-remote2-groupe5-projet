import { List, ListItem } from '@chakra-ui/layout';
import React from 'react';
import { Community } from '../../../contexts/CurrentUserContext';
import { communitiesMap, CommunitiesEnum } from '../../SignIn/SignInForm03';

type InformationsProps = {
  pseudo: string;
  age: string;
  avatarFileName: string;
  email: string;
  phoneNumber: string;
  bio: string;
  communities: Community[];
};

export default function Informations({
  informations,
}: {
  informations: InformationsProps;
}): JSX.Element {
  console.log('information', informations);
  return (
    <List spacing={6} color="#FFF" fontSize="xl">
      <ListItem>Pseudo: {informations?.pseudo}</ListItem>
      <ListItem>Age: {informations?.age}</ListItem>
      <ListItem>Email: {informations?.email}</ListItem>
      <ListItem>Numéro de téléphone: {informations?.phoneNumber}</ListItem>
      <ListItem>Biographie: {informations?.bio}</ListItem>
      <ListItem>Communautés: </ListItem>
      {informations?.communities &&
        informations?.communities.map((com, i) => {
          return (
            <ListItem key={i}>
              {communitiesMap[com.community as CommunitiesEnum]}
            </ListItem>
          );
        })}
    </List>
  );
}
