import React from 'react';
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';

type RootRouterProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RootRouter(props: RootRouterProps): JSX.Element {
  return (
    <>
      {props.isAuthenticated ? (
        <MainRouter isAuthenticated={props.isAuthenticated} />
      ) : (
        <AuthRouter />
      )}
    </>
  );
}
