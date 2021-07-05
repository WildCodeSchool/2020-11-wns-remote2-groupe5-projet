import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';

export default function RootRouter(): JSX.Element {
  const { isAuthenticated } = useContext(CurrentUserContext);

  return (
    <>
      {isAuthenticated ? (
        <MainRouter isAuthenticated={isAuthenticated} />
      ) : (
        <AuthRouter />
      )}
    </>
  );
}
