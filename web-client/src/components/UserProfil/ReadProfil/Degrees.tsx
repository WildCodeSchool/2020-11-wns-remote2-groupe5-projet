import { Box, List, ListItem } from '@chakra-ui/layout';
import React from 'react';
import { Diploma } from '../../../contexts/CurrentUserContext';
import { parseDateArticle } from '../../../utils/Date';

export default function Degrees({
  diplomas,
}: {
  diplomas: Diploma[];
}): JSX.Element {
  return (
    <>
      {diplomas.map((diploma: any, index: number) => (
        <Box>
          <List color="#FFF" spacing={6} fontSize="xl" key={index}>
            <ListItem>Intitulé du diplome: {diploma.diplomaName}</ListItem>
            <ListItem>Ecole: {diploma.school}</ListItem>
            <ListItem>Niveau d&apos;étude: {diploma.studiYear}</ListItem>
            <ListItem>
              Date de début: {parseDateArticle(diploma.dateStart)}
            </ListItem>
            <ListItem>
              {diploma.isActuelSchool
                ? "Aujourd'hui"
                : `Date de fin: ${parseDateArticle(diploma.dateEnd)}`}
            </ListItem>
            <ListItem>Description: {diploma.description}</ListItem>
            {/* <Box marginBottom="30px" borderBottom="1px" borderColor="#FFF" /> */}
          </List>
        </Box>
      ))}
    </>
  );
}
