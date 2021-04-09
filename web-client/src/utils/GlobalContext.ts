/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

interface GlobalContextProps {
  actualPage: string;
  setActualPage: (actualPage: string) => void;
  user?: { pseudo: string };
}

export default React.createContext<GlobalContextProps>({
  actualPage: 'Informations générales',
  setActualPage: () => {},
});
