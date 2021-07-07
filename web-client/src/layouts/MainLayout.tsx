import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';

interface ILayoutProps {
  children: any;
}

const MainLayout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      bgColor="gray.300"
      overflow="hidden"
    >
      <Header />
      <Box overflowY="auto" flexGrow={1}>
        {props.children}
      </Box>
      <BottomBar />
    </Flex>
  );
};

export default MainLayout;
