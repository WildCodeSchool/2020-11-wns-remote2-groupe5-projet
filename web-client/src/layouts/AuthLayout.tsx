import React from 'react';

import { Box } from '@chakra-ui/react';

interface ILayoutProps {
  children: any;
}

const AuthLayout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDir="column"
      bgColor="gray.300"
      overflowY="hidden"
    >
      {props.children}
    </Box>
  );
};

export default AuthLayout;
