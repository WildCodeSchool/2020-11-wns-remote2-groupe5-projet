import React, { useContext } from 'react';
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function RootRouter(): JSX.Element {
  const { isAuthenticated } = useContext(CurrentUserContext);

  return <>{isAuthenticated ? <MainRouter /> : <AuthRouter />}</>;
}
