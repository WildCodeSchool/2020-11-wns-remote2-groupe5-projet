import { Box, List, ListItem } from '@chakra-ui/layout';
import React from 'react';

export default function Experiences({ data }: { data: any }): JSX.Element {
  return (
    <>
      {data?.me?.experiences.map((xp: any, index: number) => (
        <List spacing={6} fontSize="xl" key={index}>
          <ListItem>Intitulé du poste: {xp.jobName}</ListItem>
          <ListItem>Entreprise: {xp.company}</ListItem>
          <ListItem>Date de début: {xp.dateStart}</ListItem>
          <ListItem>
            {xp.isActualJob ? "Aujourd'hui" : `Date de fin: ${xp.dateEnd}`}
          </ListItem>
          <ListItem>Description: {xp.description}</ListItem>
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
