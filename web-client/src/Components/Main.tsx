import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogIn from './LogIn/LogIn';
import MainSection from './MainSection/MainSection';

import HomePage from './HomePage/HomePage';

import Articles from './MainSection/FeedPage/Articles/Articles';
import ArticleCreation from './MainSection/FeedPage/ArticleCreation/ArticleCreation';
import ArticlePage from './MainSection/FeedPage/Articles/ArticlePage/ArticlePage';

import ProfilView from './Header/UserProfil/ProfilView/ProfilView';
import ProfilModification from './Header/UserProfil/ProfilModification/ProfilModification';
import MainPanel from './MainSection/MainPanel/MainPanel';

export default function Main(): JSX.Element {
  return (
    <>
      {/* <MainPanel /> */}
      <Switch>
        {/* <Route exact path="/" component={LogIn} /> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/articles" component={Articles} />
        <Route path="/articles/article-creation" component={ArticleCreation} />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route exact path="/profil" component={ProfilView} />
        <Route
          exact
          path="/profil/profil-modification"
          component={ProfilModification}
        />
        {/*  */}
      </Switch>
    </>
  );
}
