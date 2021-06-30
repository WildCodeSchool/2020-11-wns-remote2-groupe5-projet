import { Box, Flex } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

import LogoCustom from '../../components/helpers/LogoCustom';
import LogInCard from '../../components/LogInCard';

type LogInPageProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function LogInPage({ setIsAuthenticated }: LogInPageProps): JSX.Element {
  return (
          <Flex width="100%" height="100%" backgroundColor="#111827" flexDir="row" alignItems="center" justify="space-around">
              <LogoCustom />
              <LogInCard setIsAuthenticated={setIsAuthenticated} />
          </Flex>
  );
}
