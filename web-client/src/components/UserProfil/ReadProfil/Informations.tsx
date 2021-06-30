import { List, ListItem } from '@chakra-ui/layout';
import React from 'react';

export default function Informations({ data }: { data: any }): JSX.Element {
  return (
    <List spacing={6} fontSize="xl">
      <ListItem>Age: {data?.me?.age}</ListItem>
      <ListItem>Email: {data?.me?.email}</ListItem>
      <ListItem>Numéro de téléphone: {data?.me?.phoneNumber}</ListItem>
      <ListItem>Biographie: {data?.me?.bio}</ListItem>
    </List>
  );
}
