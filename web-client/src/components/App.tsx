import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
import { gql, useQuery } from '@apollo/client';

const ME = gql`
  query Me {
    me {
      userID
      pseudo
    }
  }
`;

export default function App(): JSX.Element {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const { data } = useQuery(ME);

  useEffect(() => {
    if (data) {
      setIsAuthenticate(true);
    }
  }, [data]);

  return (
    <GlobalContext.Provider value={{}}>
      <Router>
        <div className="h-screen bg-green-500">
          <Route
            path="/"
            render={() =>
              isAuthenticate ? <ProtectedRoutes /> : <Redirect to="/login" />
            }
          />

          <Route
            exact
            path="/login"
            render={() =>
              !isAuthenticate ? (
                <LogIn setIsAuthenticate={setIsAuthenticate} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}

function ProtectedRoutes(): JSX.Element {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/articles/article-creation"
          component={ArticleCreationPage}
        />
        <Route exact path="/articles/:article" component={ArticlePage} />
        <Route exact path="/profil" component={ProfilView} />
        <Route
          exact
          path="/profil/profil-modification"
          component={ProfilModification}
        />
      </Switch>
      <Footer />
    </>
  );
}
