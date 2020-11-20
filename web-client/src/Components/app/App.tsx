import React from 'react';
import Main from '../Main';
import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalContext from '../../utils/GlobalContext';

const App = (): JSX.Element => {
  return (
    <GlobalContext.Provider value={{}}>
      <Router>
        <Main />
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
