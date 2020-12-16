import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ProfilModification from './Header/UserProfil/ProfilModification/ProfilModification';
import ProfilView from './Header/UserProfil/ProfilView/ProfilView';
import LogIn from './LogIn/LogIn';
import ArticleCreation from './MainSection/FeedPage/ArticleCreation/ArticleCreation';
import ArticlePage from './MainSection/FeedPage/Articles/ArticlePage/ArticlePage';
import Articles from './MainSection/FeedPage/Articles/Articles';
import PublicationCloneTsx from './MainSection/FeedPage/Publication/PublicationCloneTsx/PublicationCloneTsx';
import Publication from './MainSection/FeedPage/Publication/Publication';
import MainSection from './MainSection/MainSection';

const Main = () => {
  return (
    <div className="h-screen bg-green-500">
      <Header />
      <Switch>
        <Route exact path="/" component={MainSection} />
        <Route exact path="/logIn" component={LogIn} />
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
        <Route exact path="/publication" component={PublicationCloneTsx} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
