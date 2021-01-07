import React from 'react';

import GlobalContext from '../utils/GlobalContext';
import useAuthentication from '../utils/useAuthentication';

import LogIn from './pages/LogIn/LogIn';
import RoutesIfLoggedIn from './Routes';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

export default function App(): JSX.Element {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuthentication();

  return (
    <div className="h-screen bg-green-500">
      {!loading && (
        <GlobalContext.Provider value={{}}>
          {isAuthenticated ? (
            <>
              <Header />
              <RoutesIfLoggedIn />
            </>
          ) : (
            <>
              <LogIn setIsAuthenticate={setIsAuthenticated} />
              <Footer />
            </>
          )}
        </GlobalContext.Provider>
      )}
    </div>
  );
}
