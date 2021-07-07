import React from 'react';
import { Box } from '@chakra-ui/react';

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
import CurrentUserProvider from './contexts/CurrentUserContext';

export default function App(): JSX.Element {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuthentication();

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
        <CurrentUserProvider>
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
        </CurrentUserProvider>
      )}
    </Box>
  );
}
