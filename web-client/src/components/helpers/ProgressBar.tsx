import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const renderProgressBar = (step: number) => {
  if (step <= 0) {
    return (
      <Flex 
        alignItems='center'
        mt='32px'
      >
        <Box 
          backgroundColor="gray.800"
          h={3}
          w={9}
          mx={5}
          borderRadius="xl"
        />
        <Box 
          backgroundColor="gray.800"
          h={2}
          w={9}
          mx={5}
          borderRadius="xl"
        />
        <Box 
          backgroundColor="gray.800"
          h={2}
          w={9}
          mx={5}
          borderRadius="xl"
        />
      </Flex>
    );
  } else if (step === 1) {
    return(
    <Flex 
    alignItems='center'
    mt='32px'
     >
    <Box 
      backgroundColor="gray.800"
      h={2}
      w={9}
      mx={5}
      borderRadius="xl"
    />
    <Box 
      backgroundColor="gray.800"
      h={3}
      w={9}
      mx={5}
      borderRadius="xl"
    />
    <Box 
      backgroundColor="gray.800"
      h={2}
      w={9}
      mx={5}
      borderRadius="xl"
    />
  </Flex>
    );
  } else if (step === 2) {
    return (
      <Flex 
        alignItems='center'
        mt='32px'
      >
        <Box 
          backgroundColor="gray.800"
          h={2}
          w={9}
          mx={5}
          borderRadius="xl"
        />
        <Box 
          backgroundColor="gray.800"
          h={2}
          w={9}
          mx={5}
          borderRadius="xl"
        />
        <Box 
          backgroundColor="gray.800"
          h={3}
          w={9}
          mx={5}
          borderRadius="xl"
        />
      </Flex>
    );
  }
};

export default renderProgressBar;
