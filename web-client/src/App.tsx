import { useQuery } from '@apollo/client';
import React from 'react';

import CurrentUserContext from './contexts/CurrentUserContext';
import { CHECK_AUTH } from './queries/user-queries';

import RootRouter from './router/RootRouter';

export default function App(): JSX.Element {
  const { data, loading } = useQuery(CHECK_AUTH);
  return (
    <>
      {!loading && (
        <CurrentUserContext isAuthenticate={!!data}>
          <RootRouter />
        </CurrentUserContext>
      )}
    </>
  );
}
