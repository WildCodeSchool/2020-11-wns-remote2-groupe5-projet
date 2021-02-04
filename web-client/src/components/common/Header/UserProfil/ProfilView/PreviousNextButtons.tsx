import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export interface ActualPageProps {
  actualPage: string;
  setActualPage: (actualPage: string) => void;
}

export default function PreviousNextButtons({
  actualPage,
  setActualPage,
}: ActualPageProps): JSX.Element {
  console.log(actualPage);

  const { url } = useRouteMatch();

  const [backButton, setBackButton] = useState<string>('Diplômes');
  const [nextButton, setNextButton] = useState<string>('Expériences');

  const back = () => {
    actualPage == 'Informations générales'
      ? (setActualPage('Diplômes'),
        setBackButton('Expériences'),
        setNextButton('Informations générales'))
      : actualPage == 'Expériences'
      ? (setActualPage('Informations générales'),
        setBackButton('Diplômes'),
        setNextButton('Expériences'))
      : (setActualPage('Expériences'),
        setBackButton('Informations générales'),
        setNextButton('Diplômes'));
  };

  const next = () => {
    actualPage == 'Informations générales'
      ? (setActualPage('Expériences'),
        setBackButton('Informations générales'),
        setNextButton('Diplômes'))
      : actualPage == 'Expériences'
      ? (setActualPage('Diplômes'),
        setBackButton('Expériences'),
        setNextButton('Informations générales'))
      : (setActualPage('Informations générales'),
        setBackButton('Diplômes'),
        setNextButton('Expériences'));
  };

  return (
    <div className="flex row justify-between">
      {/* <Link to=""> */}
      <button onClick={() => back()}>{backButton}</button>
      {/* </Link> */}
      {/* <Link to=""> */}
      <button onClick={() => next()}>{nextButton}</button>
      {/* </Link> */}
    </div>
  );
}
