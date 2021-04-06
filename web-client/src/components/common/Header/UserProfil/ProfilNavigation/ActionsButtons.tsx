import React, { useContext, useState } from 'react';
import SaveButton from './SaveButton';

import GlobalContext from '../../../../../utils/GlobalContext';

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
    <div>
      <div className="flex row justify-between">
        <button onClick={() => back()}>{backButton}</button>
        <button onClick={() => next()}>{nextButton}</button>
      </div>
      <button onClick={() => setGoToModificationPage(!goToModificationPage)}>
        {!goToModificationPage ? 'Modifier' : 'Annuler'}
      </button>
      <SaveButton />
    </div>
  );
}
