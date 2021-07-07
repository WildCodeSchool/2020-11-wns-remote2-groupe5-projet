import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import AuthLayout from '../layouts/AuthLayout';
import LogInPage from '../pages/loggedOut/LogInPage';
import SignInPage from '../pages/loggedOut/SignInPage';

export default function AuthRouter(): JSX.Element {
  const { isAuthenticated } = useContext(CurrentUserContext);

  return (
    <Router>
      <AuthLayout>
        {!isAuthenticated && <Redirect to="/" />}
        <Switch>
          <Route exact path="/" component={LogInPage} />
          <Route path="/signIn" component={SignInPage} />
        </Switch>
      </AuthLayout>
    </Router>
  );
}
