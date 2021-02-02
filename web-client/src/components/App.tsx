import React from 'react';

import GlobalContext from '../utils/GlobalContext';
import useAuthentication from '../utils/useAuthentication';

import LogIn from './pages/LogIn/LogIn';
import Routes from './Routes';
import Footer from './common/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';

export default function App(): JSX.Element {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuthentication();

  return (
    <div className="h-screen flex flex-col overflow-y-hidden bg-gray-300">
      {!loading && (
        <GlobalContext.Provider value={{}}>
          {isAuthenticated ? (
            <Routes setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <>
              {/* <LogIn setIsAuthenticated={setIsAuthenticated} /> */}
              <SignIn />
              <Footer />
            </>
          )}
        </GlobalContext.Provider>
      )}
    </div>
  );
}
