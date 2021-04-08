import React, { Dispatch, SetStateAction } from 'react';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ArticleCreationPage from './pages/ArticleCreationPage/ArticleCreationPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import ProfilView from './common/Header/UserProfil/ProfilView/ProfilView';
import InformationModification from './common/Header/UserProfil/ProfilModification/InformationModification';
import DegreeModification from './common/Header/UserProfil/ProfilModification/DegreeModification';
import ExperienceModification from './common/Header/UserProfil/ProfilModification/ExperienceModification';
import Header from './common/Header/Header';
import MainPanel from './common/MainPanel/MainPanel';

type RoutesProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function Routes({
  setIsAuthenticated,
}: RoutesProps): JSX.Element {
  return (
    <Router>
      <Header setIsAuthenticated={setIsAuthenticated} />
      <Flex flexGrow={1} overflowY="hidden">
        <MainPanel />
        <Flex flexGrow={1} overflowY="auto">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/articles/article-creation"
              component={ArticleCreationPage}
            />
            <Route path="/articles/:articleID" component={ArticlePage} />
            <Route path="/profil" component={ProfilView} />
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
      </Flex>
    </Router>
  );
}
