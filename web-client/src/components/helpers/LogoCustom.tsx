import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/icons/logo_SkillShare.svg';

export default function LogoCustom(): JSX.Element {
  return (
    <Flex alignItems="center">
      <Text color="#FFF" fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl", xl:"7xl" }}> Skillz</Text>
        <Image src={logo} w={{  base: "70px", sm:"80px", md: "90px", lg: "150px", xl: '200px' }}  />
      <Text color="#FFF" fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl", xl:"7xl" }}>Share</Text>
    </Flex>
  );
}
