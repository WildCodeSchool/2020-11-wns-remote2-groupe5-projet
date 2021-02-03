import React from 'react';

import GlobalContext from '../utils/GlobalContext';
import useAuthentication from '../utils/useAuthentication';

import LogIn from './pages/LogIn/LogIn';
import Routes from './Routes';
import Footer from './common/Footer/Footer';

// import { Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

export default function App(): JSX.Element {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuthentication();

  return (
    <div className="h-screen flex flex-col overflow-y-hidden bg-gray-300">
      {!loading && (
        <GlobalContext.Provider value={{}}>
          {isAuthenticated ? (
            <Routes setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <LogIn setIsAuthenticated={setIsAuthenticated} />
            // <Router>
            //   <Switch>
            //     <Route
            //       path="/"
            //       component={() => (
            //         )}
            //     />
            //   </Switch>
            // </Router>
          )}
        </GlobalContext.Provider>
      )}
    </div>
  );
}
