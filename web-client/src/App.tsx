import React from 'react';

import CurrentUserContext from './contexts/CurrentUserContext';

import RootRouter from './router/RootRouter';

export default function App(): JSX.Element {
  return (
    <>
      <CurrentUserContext>
        <RootRouter />
      </CurrentUserContext>
    </>
  );
}
