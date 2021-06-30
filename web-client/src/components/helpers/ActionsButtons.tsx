/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useContext, useState } from 'react';

import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { Button, Flex } from '@chakra-ui/react';

export default function ActionsButtons({
  goToModificationPage,
  setGoToModificationPage,
}: {
  goToModificationPage: boolean;
  setGoToModificationPage(goToModificationPage: boolean): void;
}): JSX.Element {
  const {actualPage, setActualPage} = useContext(CurrentUserContext);

  const [backButton, setBackButton] = useState<string>('Diplômes');
  const [nextButton, setNextButton] = useState<string>('Expériences');

  const back = () => {
    actualPage == 'Informations générales'
      ? (setActualPage && setActualPage('Diplômes'),
        setBackButton('Expériences'),
        setNextButton('Informations générales'))
      : actualPage == 'Expériences'
      ? (setActualPage && setActualPage('Informations générales'),
        setBackButton('Diplômes'),
        setNextButton('Expériences'))
      : (setActualPage && setActualPage('Expériences'),
        setBackButton('Informations générales'),
        setNextButton('Diplômes'));
  };

  const next = () => {
    actualPage == 'Informations générales'
      ? (setActualPage && setActualPage('Expériences'),
        setBackButton('Informations générales'),
        setNextButton('Diplômes'))
      : actualPage == 'Expériences'
      ? (setActualPage && setActualPage('Diplômes'),
        setBackButton('Expériences'),
        setNextButton('Informations générales'))
      : (setActualPage && setActualPage('Informations générales'),
        setBackButton('Diplômes'),
        setNextButton('Expériences'));
  };

  return (
    <Flex justifyContent="space-between" marginTop="15px">
      <Button onClick={() => back()}>{backButton}</Button>
      <Button onClick={() => next()}>{nextButton}</Button>
    </Flex>
  );
}
