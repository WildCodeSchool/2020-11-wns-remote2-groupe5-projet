import React, { useContext, useState } from 'react';
import ActionsButtons from '../../components/helpers/ActionsButtons';
import ProfilModification from '../../components/UserProfil/EditProfil/EditProfilNav';
import ProfilView from '../../components/UserProfil/ReadProfil/ProfilReadNav';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useQuery } from '@apollo/client';
import { USER_INFO } from '../../queries/user-queries';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';
import AvatarCustom from '../../components/helpers/AvatarCustom';

export enum ActualPageEnum {
  Informations = 'informations',
  Experiences = 'experiences',
  Diplomes = 'diplomas',
}

export const actualPageMap: Record<ActualPageEnum, string | undefined> = {
  [ActualPageEnum.Informations]: 'Informations',
  [ActualPageEnum.Experiences]: 'Expériences',
  [ActualPageEnum.Diplomes]: 'Diplômes',
};

export default function UserProfilPage(): JSX.Element {
  const { actualPage, currentUser } = useContext(CurrentUserContext);
  const { data } = useQuery(USER_INFO);

  const [editProfil, setEditProfil] = useState<boolean>(false);

  return (
    <Box width="100%">
      <Container
        display="flex"
        flexDirection="column"
        height="100%"
        maxWidth="container.lg"
        centerContent
        py="24px"
        px="0"
      >
        <Box width="95%">
          <Box
            backgroundColor="gray.800"
            width="100%"
            borderWidth={2}
            borderColor="#FFF"
            borderRadius="lg"
          >
            <Flex flexDirection="column" alignItems="center" pt="24px">
              <AvatarCustom
                variant="big"
                avatar={currentUser?.avatarFileName!}
              />
            </Flex>
            <Box padding={{ base: '10px', sm: '20px', md: '30px', lg: '40px' }}>
              <Flex justifyContent="space-between" paddingY="15px">
                <Text color="#FFF" fontSize="3xl">
                  {actualPageMap[actualPage as ActualPageEnum]}
                </Text>
                <Button
                  width={50}
                  height={50}
                  borderRadius="100px"
                  backgroundColor="gray.800"
                  borderWidth={2}
                  borderColor="#FFF"
                  color="#FFF"
                  onClick={() => setEditProfil(!editProfil)}
                  as={!editProfil ? EditIcon : CloseIcon}
                >
                  {!editProfil ? 'Editer' : 'Annuler'}
                </Button>
              </Flex>
              <Flex flexDirection="column">
                <Box
                  borderWidth={2}
                  borderColor="#FFF"
                  borderRadius="lg"
                  padding="20px"
                >
                  {!editProfil ? (
                    <ProfilView data={data} />
                  ) : (
                    <ProfilModification />
                  )}
                </Box>
                <ActionsButtons
                  goToModificationPage={editProfil}
                  setGoToModificationPage={setEditProfil}
                />
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
