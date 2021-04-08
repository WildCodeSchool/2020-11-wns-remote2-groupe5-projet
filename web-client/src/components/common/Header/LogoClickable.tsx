import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/icons/logo_SkillShare.svg';

const LogoClickable = () => {
  return (
    <Box>
      <NavLink to="/">
        <Flex align="center">
          <Text color="white" fontSize="5xl">
            Skillz
          </Text>
          <Logo className="h-24 w-24" />
          <Text color="white" fontSize="5xl">
            Share
          </Text>
        </Flex>
      </NavLink>
    </Box>
  );
};

export default LogoClickable;
