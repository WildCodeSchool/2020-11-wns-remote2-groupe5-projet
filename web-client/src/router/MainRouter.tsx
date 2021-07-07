import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import UserProfilPage from '../pages/loggedIn/UserProfilPage';
import InformationModification from '../components/UserProfil/EditProfil/EditInformations';
import DegreeModification from '../components/UserProfil/EditProfil/EditDegree';
import ExperienceModification from '../components/UserProfil/EditProfil/EditExperience';

import ArticleCreationPage from '../pages/loggedIn/ArticleCreationPage';
import ArticlePage from '../pages/loggedIn/ArticlePage';

import HomePage from '../pages/loggedIn/HomePage';
import MainLayout from '../layouts/MainLayout';

export default function MainRouter(): JSX.Element {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/articles/article-creation"
            component={ArticleCreationPage}
          />
          <Route path="/articles/:articleID" component={ArticlePage} />
          <Route path="/profil" component={UserProfilPage} />
          <Route
            path="/profil/profil-modification/general-information"
            component={InformationModification}
          />
          <Route
            path="/profil/profil-modification/degrees"
            component={DegreeModification}
          />
          <Route
            path="/profil/profil-modification/experiences"
            component={ExperienceModification}
          />
        </Switch>
      </MainLayout>
    </Router>
  );
}
