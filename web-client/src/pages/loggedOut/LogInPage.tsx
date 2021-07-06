import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';

import LogoCustom from '../../components/helpers/LogoCustom';
import LogInCard from '../../components/LogInCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useAuthentication from '../../customhooks/useAuthentication';

type LoginProps = {
  //isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LogInPage(props: LoginProps): JSX.Element {
  return (
    <Flex
      width={{
        base: 'xl',
        sm: '2xl',
        md: '3xl',
        lg: '4xl',
        xl: '7xl',
        xxl: '100%',
      }}
      maxW="100%"
      height="100%"
      backgroundColor="#111827"
      flexDir={{ base: 'column', sm: 'column', md: 'row' }}
      alignItems="center"
      justify={{ base: 'space-around', sm: 'space-around', md: 'space-around' }}
      px={{ base: '16px', md: '0px' }}
    >
      <LogoCustom />
      <LogInCard setIsAuthenticated={props.setIsAuthenticated!} />
      <Box>
        <Text fontSize={{ base: 'small' }} color="gray.200">
          @copyrights Fatima, Sam, Paul, Guillaume
        </Text>
      </Box>
    </Flex>
  );
}
