import React, { Dispatch, SetStateAction } from 'react';
import { Flex } from '@chakra-ui/layout';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from '../pages/loggedIn/HomePage';
import ArticlePage from '../pages/loggedIn/ArticlePage';
import UserProfil from '../pages/loggedIn/UserProfilPage';
import InformationModification from '../components/UserProfil/EditProfil/EditInformations';
import DegreeModification from '../components/UserProfil/EditProfil/EditDegree';
import ExperienceModification from '../components/UserProfil/EditProfil/EditExperience';
import Header from '../components/Header';
import MainPanel from '../components/Navbar';
import ArticleCreationPage from '../pages/loggedIn/ArticleCreationPage';

type RoutesProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function Routes({
  setIsAuthenticated,
}: RoutesProps): JSX.Element {
  return (
    <Router>
      <Header setIsAuthenticated={setIsAuthenticated} />
      <Flex flexGrow={1} flexDir="column" overflowY="hidden">
        
        <Flex flexGrow={1} overflowY="auto" overflowX="hidden">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/articles/article-creation"
              component={ArticleCreationPage}
            />
            <Route path="/articles/:articleID" component={ArticlePage} />
            <Route path="/profil" component={UserProfil} />
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
        </Flex>
        <MainPanel />
      </Flex>
    </Router>
  );
}
