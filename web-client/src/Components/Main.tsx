import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilModification from './Header/UserProfil/ProfilModification/ProfilModification';
import ProfilView from './Header/UserProfil/ProfilView/ProfilView';
import Login from './Login/Login';
import ArticleCreation from './MainSection/FeedPage/ArticleCreation/ArticleCreation';
import ArticlePage from './MainSection/FeedPage/Articles/ArticlePage/ArticlePage';
import Articles from './MainSection/FeedPage/Articles/Articles';
import Publication from './MainSection/FeedPage/Publication/Publication';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/articles/:article" component={ArticlePage} />
      <Route
        exact
        path="/articles/article-creation"
        component={ArticleCreation}
      />
      <Route exact path="/profil" component={ProfilView} />
      <Route
        exact
        path="/profil/profil-modification"
        component={ProfilModification}
      />
      {/*  */}
      <Route exact path="/publication" component={Publication} />
    </Switch>
  );
};

export default Main;
