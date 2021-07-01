import React, { useContext, useState } from 'react';
import ActionsButtons from '../../components/helpers/ActionsButtons';
import ProfilModification from '../../components/UserProfil/EditProfil/EditProfilNav';
import ProfilView from '../../components/UserProfil/ReadProfil/ProfilReadNav';
import GlobalContext, { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useQuery } from '@apollo/client';
import { USER_INFO } from '../../queries/user-queries';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Avatar } from '@chakra-ui/avatar';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';
import AvatarCustom from '../../components/helpers/AvatarCustom';

export default function UserProfilPage(): JSX.Element {
  const {actualPage, setActualPage, currentUser} = useContext(CurrentUserContext);
  const { data } = useQuery(USER_INFO);

  const [goToModificationPage, setGoToModificationPage] = useState<boolean>(
    false
  );

  return (
    <Box
      height="100vh"
      width="100%"
      backgroundColor="whiteAlpha.900"
    >
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
            backgroundColor="#393E46"
            width="100%"
            // padding={{ lg: '0 80px 50px 80px', base: '0' }}
            borderRadius="13px"
          >
            <Flex flexDirection="column" alignItems="center" pt="24px">
              <AvatarCustom
                variant="big"
                avatar={currentUser?.avatarFileName!}
              />
              <Text fontSize="2xl" color="white">
                {data?.me?.pseudo}
              </Text>
            </Flex>
            <Box padding={{base:"10px",sm:"20px",md:"30px",lg:"40px"}}>
              <Flex justifyContent="space-between" paddingY="15px">
                <Text color="White" fontSize="3xl">
                  {actualPage}
                </Text>
                <Button
                  borderRadius="100px"
                  width={50}
                  height={50}
                  onClick={() => setGoToModificationPage(!goToModificationPage)}
                  as={!goToModificationPage ? EditIcon : CloseIcon}
                >
                  {!goToModificationPage ? 'Edit' : 'Annuler'}
                </Button>
              </Flex>
              <Flex flexDirection="column">
                <Box
                  backgroundColor="whiteAlpha.900"
                  padding="20px"
                  borderRadius="13px"
                >
                  {!goToModificationPage ? (
                    <ProfilView data={data} />
                  ) : (
                    <ProfilModification />
                  )}
                </Box>
                <ActionsButtons
                  goToModificationPage={goToModificationPage}
                  setGoToModificationPage={setGoToModificationPage}
                />
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
