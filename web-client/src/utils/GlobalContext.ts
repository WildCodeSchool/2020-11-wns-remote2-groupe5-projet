import React from 'react';

interface GlobalContextProps {
  test?: string;
}

export default React.createContext<GlobalContextProps>({});
