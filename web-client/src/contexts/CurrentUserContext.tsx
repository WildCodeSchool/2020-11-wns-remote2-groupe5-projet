import { useQuery } from '@apollo/client';
import React, { ReactChild, useState } from 'react';
import { useEffect } from 'react';
import useAuthentication from '../customhooks/useAuthentication';
import { USER_INFO } from '../queries/user-queries';

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
  const [currentUser, setCurrentUser] = useState<CurrentUser>();
  const [actualPage, setActualPage] = useState<string>('informations');

  const { isAuthenticated, setIsAuthenticated, loading } = useAuthentication();

  const { data } = useQuery(USER_INFO);

  useEffect(() => {
    if (isAuthenticated && data) setCurrentUser(data?.me);
  }, [data, isAuthenticated]);

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
