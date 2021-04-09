import { Box, List, ListItem } from '@chakra-ui/layout';
import React from 'react';

export default function Degrees({ data }: { data: any }): JSX.Element {
  return (
    <>
      {data?.me?.diplomas.map((diploma: any, index: number) => (
        <List spacing={6} fontSize="xl" key={index}>
          <ListItem>Intitulé du diplome: {diploma.diplomaName}</ListItem>
          <ListItem>Ecole: {diploma.school}</ListItem>
          <ListItem>Niveau d&apos;étude: {diploma.studiYear}</ListItem>
          <ListItem>Date de début: {diploma.dateStart}</ListItem>
          <ListItem>
            {diploma.isActuelSchool
              ? "Aujourd'hui"
              : `Date de fin: ${diploma.dateEnd}`}
          </ListItem>
          <ListItem>Description: {diploma.description}</ListItem>
          <Box
            marginBottom="30px"
            borderBottom="1px"
            borderColor="blackAlpha.400"
          />
        </List>
      ))}
    </>
  );
}
