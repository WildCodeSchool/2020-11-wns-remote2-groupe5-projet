import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/icons/logo_SkillShare.svg';

export default function LogoCustom(): JSX.Element {
  return (
    <Flex alignItems="center">
      <Text color="#FFF" fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl", xl:"7xl" }}> Skillz</Text>
        <Image src={logo} w={{  base: "130px", sm:"130px", md: "200px", lg: "220px", xl: '250px' }}  />
      <Text color="#FFF" fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl", xl:"7xl" }}>Share</Text>
    </Flex>
  );
}
