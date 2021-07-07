import React, { useContext } from 'react';
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

// type RootRouterProps = {
//   isAuthenticated?: boolean;
//   setIsAuthenticated?: React.Dispatch<React.SetStateAction<boolean>>;
// };

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
