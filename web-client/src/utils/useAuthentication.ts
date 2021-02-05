import { useState, useMemo, SetStateAction, Dispatch } from 'react';
import { CHECK_AUTH } from '../queries/user-queries';
import { useQuery } from '@apollo/client';

type hookReturn = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
};

export default function useAuthentication(): hookReturn {
  const { data, loading } = useQuery(CHECK_AUTH);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useMemo(() => {
    if (data) {
      setIsAuthenticated(true);
    }
  }, [data]);

  return { isAuthenticated, setIsAuthenticated, loading };
}