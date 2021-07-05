import React from 'react';

import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';

interface ILayoutProps {
  children: any;
}

const MainLayout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  return (
    <Box w="100%" h="100vh" display="flex" flexDir="column" bgColor="gray.300">
      <Header />
      {props.children}
      <BottomBar />
    </Box>
  );
};

export default MainLayout;
