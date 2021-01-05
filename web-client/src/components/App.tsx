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
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

export default function App(): JSX.Element {
  const isAuthenticated = false;

  return (
    <GlobalContext.Provider value={{}}>
      <Router>
        <div className="h-screen bg-green-500">
          {isAuthenticated ? (
            <>
              <Header />
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
                <Route
                  exact
                  path="/profil/profil-modification"
                  component={ProfilModification}
                />
              </Switch>
              <Footer />
            </>
          ) : (
            <Route exact path="/" component={LogIn} />
          )}
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}
