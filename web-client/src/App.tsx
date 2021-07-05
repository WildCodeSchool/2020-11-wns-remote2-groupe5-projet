import React from 'react';

import CurrentUserProvider from './contexts/CurrentUserContext';

import RootRouter from './router/RootRouter';

export default function App(): JSX.Element {
  return (
    <CurrentUserProvider>
      <RootRouter />
    </CurrentUserProvider>
  );
}
