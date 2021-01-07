import React from 'react';

import GlobalContext from '../utils/GlobalContext';
import useAuthentication from '../utils/useAuthentication';

import LogIn from './pages/LogIn/LogIn';
import Routes from './Routes';
import Footer from './common/Footer/Footer';

export default function App(): JSX.Element {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuthentication();

  return (
    <div className="h-screen bg-gray-300">
      {!loading && (
        <GlobalContext.Provider value={{}}>
          {isAuthenticated ? (
            <Routes />
          ) : (
            <>
              <LogIn setIsAuthenticated={setIsAuthenticated} />
              <Footer />
            </>
          )}
        </GlobalContext.Provider>
      )}
    </div>
  );
}
