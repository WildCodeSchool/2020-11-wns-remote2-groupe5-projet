import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOG_OUT } from '../queries/user-queries';
import {
  Flex,
  Box,
  Text,
  Avatar,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import LogoClickable from './helpers/LogoClickable';
import LogoCustom from './helpers/LogoCustom';

type HeaderProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  setIsAuthenticated,
}: HeaderProps): JSX.Element {
  const [logout] = useMutation(LOG_OUT);

  const clickToLogOut = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.log('error');
    }
  };

  return (
      <Flex
        bgColor="gray.800"
        justify={{base: "space-between", sm: "space-between"}}
        align="center"
        h="100px"
        w="100%"
				px="16px"
      >
        <Flex>
          <LogoCustom isNavLink />
        </Flex>
        <Flex>
          <Menu>
            <MenuButton>
              <Avatar 
								w={{ base: "50px", sm:"60px", md: "70px", lg: "74px", xl: "74px" }} 
								h={{ base: "50px", sm:"60px", md: "70px", lg: "74px", xl: "74px" }} 
							/>
            </MenuButton>
            <MenuList>
              <Link
                as={ReachLink}
                to="/profil/profil-modification/general-information"
                py={0}
              >
                <MenuItem>
                  <Text>Profil</Text>
                </MenuItem>
              </Link>
              <MenuItem onClick={clickToLogOut}>Déconnexion</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
  );
}
