import { useLazyQuery, useQuery } from '@apollo/client';
import React, { ReactChild, useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { CHECK_AUTH, USER_INFO } from '../queries/user-queries';

interface IProps {
  children: ReactChild | ReactChild[];
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser>();
  const [actualPage, setActualPage] = useState<string>('informations');

  const { data, loading } = useQuery(CHECK_AUTH);

  const [getUser, { data: user }] = useLazyQuery(USER_INFO);

  useMemo(() => {
    if (data) {
      setIsAuthenticated(true);
    }
    if (isAuthenticated) {
      getUser();
      if (user) setCurrentUser(user?.me);
    }
  }, [data, getUser, isAuthenticated, user]);

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
