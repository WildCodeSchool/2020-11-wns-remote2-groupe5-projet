import React from 'react';

import CurrentUserContext from './contexts/CurrentUserContext';
import useAuthentication from './customhooks/useAuthentication';

import RootRouter from './router/RootRouter';

export default function App(): JSX.Element {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuthentication();

  return (
    <>
      {!loading && (
        <CurrentUserContext>
          <RootRouter
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </CurrentUserContext>
      )}
    </>
  );
}
