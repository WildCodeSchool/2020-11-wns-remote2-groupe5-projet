import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ArticleCreationPage from './pages/ArticleCreationPage/ArticleCreationPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import ProfilView from './common/Header/UserProfil/ProfilView/ProfilView';
import ProfilModification from './common/Header/UserProfil/ProfilModification/ProfilModification';

export default function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/articles/article-creation"
          component={ArticleCreationPage}
        />
        <Route path="/articles/:article" component={ArticlePage} />
        <Route path="/profil" component={ProfilView} />
        <Route
          path="/profil/profil-modification"
          component={ProfilModification}
        />
      </Switch>
    </Router>
  );
}
