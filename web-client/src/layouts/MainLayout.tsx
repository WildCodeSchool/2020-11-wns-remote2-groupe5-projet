import React, { ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

interface ILayoutProps {
  children: ReactElement;
}

const MainLayout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  const { loading } = useContext(CurrentUserContext);
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      bgColor="gray.700"
      overflow="hidden"
    >
      {!loading && <Header />}
      <Box overflowY="auto" flexGrow={1} overflowX="hidden">
        {props.children}
      </Box>
      <BottomBar />
    </Flex>
  );
};

export default MainLayout;
