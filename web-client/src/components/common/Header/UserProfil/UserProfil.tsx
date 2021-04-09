import React, { useContext, useState } from 'react';
import ActionsButtons from './ProfilNavigation/ActionsButtons';
import ProfilModification from './ProfilModification/ProfilModification';
import ProfilView from './ProfilView/ProfilView';
import GlobalContext from '../../../../utils/GlobalContext';
import { useQuery } from '@apollo/client';
import { USER_INFO } from '../../../../queries/user-queries';
import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Avatar } from '@chakra-ui/avatar';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';

export default function UserProfil(): JSX.Element {
  const context = useContext(GlobalContext);
  const { data } = useQuery(USER_INFO);

  const [goToModificationPage, setGoToModificationPage] = useState<boolean>(
    false
  );

  return (
    <Box
      height="100vh"
      width="100%"
      backgroundColor="whiteAlpha.900"
      paddingTop="100px"
    >
      <Container
        display="flex"
        flexDirection="column"
        height="100%"
        maxWidth="container.lg"
        centerContent
        padding="0"
      >
        <Box width="100%">
          <Box
            backgroundColor="#393E46"
            width="100%"
            padding={{ lg: '0 80px 50px 80px', base: '0' }}
            borderRadius="13px"
          >
            <Flex flexDirection="column" alignItems="center">
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profil picture"
                boxSize="3xs"
                marginTop="-90px"
              />
              <Text fontSize="2xl" color="white">
                {data?.me?.pseudo}
              </Text>
            </Flex>
            <Box>
              <Flex justifyContent="space-between" paddingY="15px">
                <Text color="White" fontSize="3xl">
                  {context.actualPage}
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
