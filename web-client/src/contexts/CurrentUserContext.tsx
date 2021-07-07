import { useQuery } from '@apollo/client';
import React, { ReactChild, useEffect, useState } from 'react';
import { USER_INFO } from '../queries/user-queries';

interface IProps {
  children: ReactChild | ReactChild[];
  isAuthenticate: boolean;
}

type CurrentUser = {
  id: string;
  pseudo: string;
  email?: string;
  age?: number;
  phoneNumber?: string;
  bio?: string;
  avatarFileName?: string;
  __typename: string;
};

type CurrentUserContextProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser?: CurrentUser;
  actualPage: string;
  setActualPage: (actualPage: string) => void;
  loading: boolean;
};

export const CurrentUserContext = React.createContext<
  Partial<CurrentUserContextProps>
>({});

const CurrentUserProvider: React.FC<IProps> = (props: IProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticate);
  const [currentUser, setCurrentUser] = useState<CurrentUser>();
  const [actualPage, setActualPage] = useState<string>('informations');

  const { data: user, loading } = useQuery(USER_INFO);

  const conditionLog = () => {
    if (isAuthenticated) {
      if (!loading) {
        setCurrentUser(user?.me);
      }
    }
  };

  useEffect(() => {
    conditionLog();
  }, [isAuthenticated, user]);

  return (
    <CurrentUserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        actualPage,
        setActualPage,
        loading,
      }}
    >
      {props.children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
