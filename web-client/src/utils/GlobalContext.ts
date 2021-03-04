import React from 'react';

interface GlobalContextProps {
  user?: { pseudo: string };
}

export default React.createContext<GlobalContextProps>({});
