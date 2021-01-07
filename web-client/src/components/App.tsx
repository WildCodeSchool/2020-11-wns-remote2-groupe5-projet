import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalContext from '../utils/GlobalContext';
import LogIn from './pages/LogIn/LogIn';
import HomePage from './pages/HomePage/HomePage';
import ArticleCreationPage from './pages/ArticleCreationPage/ArticleCreationPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import ProfilView from './common/Header/UserProfil/ProfilView/ProfilView';
import ProfilModification from './common/Header/UserProfil/ProfilModification/ProfilModification';
import InformationModification from './common/Header/UserProfil/ProfilModification/InformationModification';
import DegreeModification from './common/Header/UserProfil/ProfilModification/DegreeModification';
import ExperienceModification from './common/Header/UserProfil/ProfilModification/ExperienceModification';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

export default function App(): JSX.Element {
  const isAuthenticated = true;

  return (
    <GlobalContext.Provider value={{}}>
      <Router>
        <div className="h-screen flex flex-col">
          {isAuthenticated ? (
            <>
              <Header />
              <div className="flex-grow">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route
                    exact
                    path="/articles/article-creation"
                    component={ArticleCreationPage}
                  />
                  <Route
                    exact
                    path="/articles/:article"
                    component={ArticlePage}
                  />
                  <Route exact path="/profil" component={ProfilView} />
                  {/* <Route
                    exact
                    path="/profil/profil-modification"
                    component={ProfilModification}
                  /> */}
                  <Route
                    exact
                    path="/profil/profil-modification/general-information"
                    component={InformationModification}
                  />
                  <Route
                    exact
                    path="/profil/profil-modification/degrees"
                    component={DegreeModification}
                  />
                  <Route
                    exact
                    path="/profil/profil-modification/experiences"
                    component={ExperienceModification}
                  />
                </Switch>
              </div>
              {/* <Footer /> */}
            </>
          ) : (
            <Route exact path="/" component={LogIn} />
          )}
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}
