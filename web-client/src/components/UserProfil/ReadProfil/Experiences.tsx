import { Box, List, ListItem } from '@chakra-ui/layout';
import React from 'react';
import { Experience } from '../../../contexts/CurrentUserContext';
import { parseDateArticle } from '../../../utils/Date';

export default function Experiences({
  experiences,
}: {
  experiences: Experience[];
}): JSX.Element {
  return (
    <>
      {experiences.map((xp: Experience, index: number) => (
        <List color="#FFF" spacing={6} fontSize="xl" key={index}>
          <ListItem>Intitulé du poste: {xp.jobName}</ListItem>
          <ListItem>Entreprise: {xp.company}</ListItem>
          <ListItem>Date de début: {parseDateArticle(xp.dateStart)}</ListItem>
          <ListItem>
            {xp.isActualJob
              ? "Aujourd'hui"
              : `Date de fin: ${parseDateArticle(xp.dateEnd)}`}
          </ListItem>
          <ListItem>Description: {xp.description}</ListItem>
          {/* <Box marginBottom="30px" borderBottom="1px" borderColor="#FFF" /> */}
        </List>
      ))}
    </>
  );
}
