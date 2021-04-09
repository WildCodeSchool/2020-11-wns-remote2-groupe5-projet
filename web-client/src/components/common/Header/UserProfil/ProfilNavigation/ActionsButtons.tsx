import React, { useContext, useState } from 'react';

import GlobalContext from '../../../../../utils/GlobalContext';
import { Button, Flex } from '@chakra-ui/react';

export default function ActionsButtons({
  goToModificationPage,
  setGoToModificationPage,
}: {
  goToModificationPage: boolean;
  setGoToModificationPage(goToModificationPage: boolean): void;
}): JSX.Element {
  const context = useContext(GlobalContext);

  const [backButton, setBackButton] = useState<string>('Diplômes');
  const [nextButton, setNextButton] = useState<string>('Expériences');

  const back = () => {
    context.actualPage == 'Informations générales'
      ? (context.setActualPage('Diplômes'),
        setBackButton('Expériences'),
        setNextButton('Informations générales'))
      : context.actualPage == 'Expériences'
      ? (context.setActualPage('Informations générales'),
        setBackButton('Diplômes'),
        setNextButton('Expériences'))
      : (context.setActualPage('Expériences'),
        setBackButton('Informations générales'),
        setNextButton('Diplômes'));
  };

  const next = () => {
    context.actualPage == 'Informations générales'
      ? (context.setActualPage('Expériences'),
        setBackButton('Informations générales'),
        setNextButton('Diplômes'))
      : context.actualPage == 'Expériences'
      ? (context.setActualPage('Diplômes'),
        setBackButton('Expériences'),
        setNextButton('Informations générales'))
      : (context.setActualPage('Informations générales'),
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
