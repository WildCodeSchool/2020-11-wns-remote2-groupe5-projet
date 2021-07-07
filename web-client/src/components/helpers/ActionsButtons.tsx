/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useContext, useState } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaArrowLeft } from 'react-icons/fa';
import {
  ActualPageEnum,
  actualPageMap,
} from '../../pages/loggedIn/UserProfilPage';

export default function ActionsButtons({
  goToModificationPage,
  setGoToModificationPage,
}: {
  goToModificationPage: boolean;
  setGoToModificationPage(goToModificationPage: boolean): void;
}): JSX.Element {
  const { actualPage, setActualPage } = useContext(CurrentUserContext);

  const [backButton, setBackButton] = useState<string>('diplomas');
  const [nextButton, setNextButton] = useState<string>('experiences');

  const back = () => {
    actualPage === 'informations'
      ? (setActualPage && setActualPage('diplomas'),
        setBackButton('experiences'),
        setNextButton('informations'))
      : actualPage === 'experiences'
      ? (setActualPage && setActualPage('informations'),
        setBackButton('diplomas'),
        setNextButton('experiences'))
      : (setActualPage && setActualPage('experiences'),
        setBackButton('informations'),
        setNextButton('diplomas'));
  };

  const next = () => {
    actualPage === 'informations'
      ? (setActualPage && setActualPage('experiences'),
        setBackButton('informations'),
        setNextButton('diplomas'))
      : actualPage === 'experiences'
      ? (setActualPage && setActualPage('diplomas'),
        setBackButton('experiences'),
        setNextButton('informations'))
      : (setActualPage && setActualPage('informations'),
        setBackButton('diplomas'),
        setNextButton('experiences'));
  };

  return (
    <Flex justifyContent="space-between" marginTop="15px">
      <Button
        variant="ghost"
        leftIcon={<FaArrowLeft />}
        onClick={() => back()}
        colorScheme="gray.100"
        color="#FFF"
        _hover={{ borderColor: 'gray.800' }}
        _checked={{ borderColor: 'gray.800' }}
      >
        {actualPageMap[backButton as ActualPageEnum]}
      </Button>
      <Button
        variant="ghost"
        rightIcon={<ArrowForwardIcon />}
        onClick={() => next()}
        colorScheme="gray.100"
        color="#FFF"
        _hover={{ borderColor: 'gray.800' }}
        _checked={{ borderColor: 'gray.800' }}
        //backgroundColor="gray.900"
      >
        {actualPageMap[nextButton as ActualPageEnum]}
      </Button>
    </Flex>
  );
}
