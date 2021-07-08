import { Flex, Text, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/icons/logo_SkillShare.svg';

type LogoCustomProps = {
  isNavLink?: boolean;
};

export default function LogoCustom(props: LogoCustomProps): JSX.Element {
  const { isNavLink } = props;

  const logo = () => {
    return (
      <Flex alignItems="center">
        <Text
          color="#FFF"
          fontSize={{ base: '3xl', sm: '3xl', md: '3xl', lg: '4xl', xl: '7xl' }}
        >
          {' '}
          Skillz
        </Text>
        <Image
          src={logoImage}
          w={{
            base: '130px',
            sm: '130px',
            md: '200px',
            lg: '220px',
            xl: '250px',
          }}
        />
        <Text
          color="#FFF"
          fontSize={{ base: '3xl', sm: '3xl', md: '3xl', lg: '4xl', xl: '7xl' }}
        >
          Share
        </Text>
      </Flex>
    );
  };

  const logoNavLink = () => {
    return (
      <NavLink to="/">
        <Flex alignItems="center">
          <Text
            color="#FFF"
            fontSize={{
              base: '2xl',
              sm: '3xl',
              md: '3xl',
              lg: '4xl',
              xl: '5xl',
            }}
          >
            {' '}
            Skillz
          </Text>
          <Image
            src={logoImage}
            w={{
              base: '90px',
              sm: '90px',
              md: '100px',
              lg: '100px',
              xl: '110px',
            }}
          />
          <Text
            color="#FFF"
            fontSize={{
              base: '2xl',
              sm: '3xl',
              md: '3xl',
              lg: '4xl',
              xl: '5xl',
            }}
          >
            Share
          </Text>
        </Flex>
      </NavLink>
    );
  };

  return isNavLink ? logoNavLink() : logo();
}
