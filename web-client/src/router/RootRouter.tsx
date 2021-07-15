import React, { useContext, useEffect } from 'react';
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function RootRouter(): JSX.Element {
  const { isAuthenticated, refetch } = useContext(CurrentUserContext);

  useEffect(() => {
    if (isAuthenticated) {
      refetch && refetch();
    }
  }, [refetch, isAuthenticated]);

  return <>{isAuthenticated ? <MainRouter /> : <AuthRouter />}</>;
}
