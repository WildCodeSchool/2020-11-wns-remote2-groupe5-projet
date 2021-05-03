import React, { useState } from 'react';
import { Box, Flex, Container } from '@chakra-ui/react';

import GlobalContext from '../utils/GlobalContext';
import useAuthentication from '../utils/useAuthentication';
import LogIn from './common/LogIn/LogIn';
import Routes from './Routes';
import SignIn from './common/SignIn/SignIn';
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
