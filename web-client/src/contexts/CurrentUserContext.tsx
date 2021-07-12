import {
  ApolloQueryResult,
  OperationVariables,
  useLazyQuery,
  useQuery,
} from '@apollo/client';
import React, { ReactChild, useEffect, useState } from 'react';
import { USER_INFO } from '../queries/user-queries';

interface IProps {
  children: ReactChild | ReactChild[];
  isAuthenticate: boolean;
}

export type Experience = {
  jobName: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  isActualJob: string;
  description: string;
};

export type Diploma = {
  jobName: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  isActualJob: string;
  description: string;
};

export type Community = {
  communityID: string;
  community: string;
};

type CurrentUser = {
  id: string;
  pseudo: string;
  email?: string;
  age?: string;
  phoneNumber?: string;
  bio?: string;
  avatarFileName?: string;
  communities: Community[];
  diplomas: Diploma[];
  experiences: Experience[];
  __typename: string;
};

type CurrentUserContextProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser?: CurrentUser;
  actualPage: string;
  setActualPage: (actualPage: string) => void;
  loading: boolean;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};

export const CurrentUserContext = React.createContext<
  Partial<CurrentUserContextProps>
>({});

const CurrentUserProvider: React.FC<IProps> = (props: IProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticate);
  const [currentUser, setCurrentUser] = useState<CurrentUser>();
  const [actualPage, setActualPage] = useState<string>('informations');

  const {
    data: user,
    loading,
    refetch,
  } = useQuery(USER_INFO, { fetchPolicy: 'no-cache' });

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
        refetch,
      }}
    >
      {props.children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
