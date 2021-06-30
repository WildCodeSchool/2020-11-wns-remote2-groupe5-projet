import React, { useState } from 'react';
import { Box, Flex, Container } from '@chakra-ui/react';

import GlobalContext from './contexts/GlobalContext';
import useAuthentication from './customhooks/useAuthentication';
import LogIn from './pages/loggedOut/LogInPage';
import Routes from './router/Routes';
import SignIn from './pages/loggedOut/SignInPage';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

export default function App(): JSX.Element {
  const {
    isAuthenticated,
    setIsAuthenticated,
    loading,
    data,
  } = useAuthentication();

  const [actualPage, setActualPage] = useState<string>(
    'Informations générales'
  );

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDir="column"
      bgColor="gray.300"
      overflowY="hidden"
    >
      {!loading && (
        <GlobalContext.Provider
          value={{
            user: { pseudo: data?.me?.pseudo, id: data?.me?.id },
            actualPage,
            setActualPage,
          }}
        >
          {isAuthenticated ? (
            <Routes setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <Router>
              {!isAuthenticated && <Redirect to="/" />}
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <LogIn setIsAuthenticated={setIsAuthenticated} />
                  )}
                />
                <Route path="/signIn" component={SignIn} />
              </Switch>
            </Router>
          )}
        </GlobalContext.Provider>
      )}
    </Box>
  );
}
