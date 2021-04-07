import React from 'react';

interface GlobalContextProps {
  user?: { pseudo: string; id: string };
}

export default React.createContext<GlobalContextProps>({});
