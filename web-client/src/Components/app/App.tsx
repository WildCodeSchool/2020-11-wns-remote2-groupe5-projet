import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalContext from '../../utils/GlobalContext';
import LogIn from '../LogIn/LogIn';
import Header from '../Header/Header';
import Main from '../Main';
import Footer from '../Footer/Footer';

import './App.css';
import 'tailwindcss/tailwind.css';

const App = (): JSX.Element => {
  const islogIn = true;
  return (
    <GlobalContext.Provider value={{}}>
      {!islogIn ? (
        <>
          <LogIn />
        </>
      ) : (
        <div>
          <Header />
          <Router>
            <Main />
          </Router>
          <Footer />
        </div>
      )}
    </GlobalContext.Provider>
  );
};

export default App;
