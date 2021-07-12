import React, { useContext } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOG_OUT } from '../queries/user-queries';
import {
  Flex,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import LogoCustom from './helpers/LogoCustom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import AvatarCustom from './helpers/AvatarCustom';

export default function Header(): JSX.Element {
  const [logout] = useMutation(LOG_OUT);

  const { currentUser, setIsAuthenticated } = useContext(CurrentUserContext);

  const clickToLogOut = async () => {
    try {
      await logout();
      setIsAuthenticated && setIsAuthenticated(false);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <Flex
      bgColor="gray.800"
      justify={{ base: 'space-between', sm: 'space-between' }}
      align="center"
      h="100px"
      w="100%"
      px="16px"
      boxShadow="1px 2px 15px -1px rgba(0,0,0,0.66)"
      zIndex="10"
    >
      <Flex>
        <LogoCustom isNavLink />
      </Flex>
      <Flex>
        <Menu>
          <MenuButton>
            <AvatarCustom variant="big" avatar={currentUser?.avatarFileName!} />
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
