/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

interface GlobalContextProps {
  test?: string;
  actualPage: string;
  setActualPage: (actualPage: string) => void;
}

export default React.createContext<GlobalContextProps>({
  actualPage: 'Informations générales',
  setActualPage: () => {},
});
