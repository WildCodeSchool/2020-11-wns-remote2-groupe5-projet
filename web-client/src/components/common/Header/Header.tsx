import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import './Header.css';
import useOnClickOutside from '../../../utils/CloseOnOutsideClick';
import { Link as ReachLink } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOG_OUT } from '../../../queries/user-queries';
import {
  Flex,
  Box,
  Text,
  Button,
  Avatar,
  Modal,
  ModalContent,
  Link,
  Icon,
} from '@chakra-ui/react';
import LogoClickable from './LogoClickable';
import { useDisclosure } from '@chakra-ui/react';

type HeaderProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  setIsAuthenticated,
}: HeaderProps): JSX.Element {
  const refProfil = useRef(null);
  const [openSearchbar, setOpenSerachbar] = useState<boolean>(false);
  const [openProfilDropdown, setOpenProfilDropdown] = useState<boolean>(false);
  const [logout] = useMutation(LOG_OUT);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const clickToLogOut = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.log('error');
      // setErrorMessage(error.message);
    }
  };

  useOnClickOutside(refProfil, () =>
    setOpenProfilDropdown(!openProfilDropdown)
  );

  return (
    <Box bgColor="gray.900" h="100px">
      <Flex align="center">
        <LogoClickable />
        <Button variant="unstyled" onClick={onOpen}>
          <Avatar />
        </Button>
        <Modal isOpen={isOpen} onClose={() => onClose()}>
          <ModalContent>
            <Link
              as={ReachLink}
              to="/profil/profil-modification/general-information"
              m="8px"
            >
              <Text>Profil</Text>
            </Link>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
}
