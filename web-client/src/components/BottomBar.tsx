import React from 'react';
import { Link, Flex } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { RiHomeLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { IoCreateOutline, IoNotificationsOutline } from 'react-icons/io5';

export default function BottomBar(): JSX.Element {
  return (
    <Flex
      width="100%"
      flexDir="row"
      color="white"
      justifyContent="space-around"
      align="center"
      bgColor="gray.800"
      boxShadow="1px 2px 15px -1px rgba(0,0,0,0.66)"
      zIndex="1"
    >
      <Link as={ReachLink} to="/" m="8px">
        <RiHomeLine size="34px" />
      </Link>
      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <IoCreateOutline size="34px" />
      </Link>
      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <IoNotificationsOutline size="34px" />
      </Link>

      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <FiUsers size="34px" />
      </Link>
    </Flex>
  );
}
