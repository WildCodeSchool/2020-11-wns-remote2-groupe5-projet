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
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PublicationCloneTsx from './MainSection/FeedPage/Publication/PublicationCloneTsx/PublicationCloneTsx';

export default function Main(props: any): JSX.Element {
  console.log('main', props);
  return (
    <div className="h-screen bg-green-500">
      <Header />
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/homePage" component={HomePage} />
        <Route exact path="/articles" component={Articles} />
        <Route
          exact
          path="/articles/article-creation"
          component={ArticleCreation}
        />
        <Route exact path="/articles/:article" component={ArticlePage} />
        <Route exact path="/profil" component={ProfilView} />
        <Route
          exact
          path="/profil/profil-modification"
          component={ProfilModification}
        />
        <Route exact path="/publication" component={PublicationCloneTsx} />
        {/*  */}
      </Switch>
      <Footer />
    </div>
  );
}
