import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalContext from '../../utils/GlobalContext';
import Main from '../Main';
import './App.css';
import 'tailwindcss/tailwind.css';

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
