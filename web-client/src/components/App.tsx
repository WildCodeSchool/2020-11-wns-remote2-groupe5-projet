import React, { useState } from 'react';
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
    <div className="h-screen flex flex-col overflow-y-hidden bg-gray-300">
      {!loading && (
        <GlobalContext.Provider
          value={{
            user: { pseudo: data?.me?.pseudo },
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
    </div>
  );
}
