import React from 'react';
import Main from '../Main';
import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalContext from '../../utils/GlobalContext';

const App = (): JSX.Element => {
  return (
    <GlobalContext.Provider value={{}}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.css"
      />

      <Router>
        <Main />
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
