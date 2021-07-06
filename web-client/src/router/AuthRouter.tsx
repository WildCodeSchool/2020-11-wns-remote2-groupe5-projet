import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import useAuthentication from '../customhooks/useAuthentication';
import AuthLayout from '../layouts/AuthLayout';
import LogInPage from '../pages/loggedOut/LogInPage';
import SignInPage from '../pages/loggedOut/SignInPage';

export default function AuthRouter(): JSX.Element {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();

  return (
    <Router>
      <AuthLayout>
        {!isAuthenticated && <Redirect to="/" />}
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LogInPage setIsAuthenticated={setIsAuthenticated} />
            )}
          />
          <Route path="/signIn" component={SignInPage} />
        </Switch>
      </AuthLayout>
    </Router>
  );
}
