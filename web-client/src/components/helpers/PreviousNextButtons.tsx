import React, { useState } from 'react';

export interface ActualPageProps {
  actualPage: string;
  setActualPage: (actualPage: string) => void;
}

export default function PreviousNextButtons({
  actualPage,
  setActualPage,
}: ActualPageProps): JSX.Element {
  //console.log(actualPage);

  const [backButton, setBackButton] = useState<string>(' diplomas');
  const [nextButton, setNextButton] = useState<string>('experiences');

  const back = () => {
    actualPage === 'informations'
      ? (setActualPage(' diplomas'),
        setBackButton('experiences'),
        setNextButton('informations'))
      : actualPage === 'experiences'
      ? (setActualPage('informations'),
        setBackButton('diplomas'),
        setNextButton('experiences'))
      : (setActualPage('experiences'),
        setBackButton('informations'),
        setNextButton('diplomas'));
  };

  const next = () => {
    actualPage === 'informations'
      ? (setActualPage('experiences'),
        setBackButton('informations'),
        setNextButton('diplomas'))
      : actualPage === 'experiences'
      ? (setActualPage(' diplomas'),
        setBackButton('experiences'),
        setNextButton('informations'))
      : (setActualPage('informations'),
        setBackButton('diplomas'),
        setNextButton('experiences'));
  };

  return (
    <div>
      <button onClick={() => back()}>{backButton}</button>
      <button onClick={() => next()}>{nextButton}</button>
    </div>
  );
}
