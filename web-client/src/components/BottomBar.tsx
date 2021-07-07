import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { BsHouseDoorFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { MdNotifications } from 'react-icons/md';
import { FaRegBookmark } from 'react-icons/fa';
import { Flex } from '@chakra-ui/layout';
import { Link, Icon } from '@chakra-ui/react';

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
        <Icon as={BsHouseDoorFill} w={8} h={8} _hover={{ color: 'gray.400' }} />
      </Link>
      {/* <Divider orientation="horizontal" /> */}
      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <Icon as={BiEdit} w={8} h={8} _hover={{ color: 'gray.400' }} />
      </Link>
      {/* <Divider orientation="horizontal" /> */}
      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <Icon as={MdNotifications} w={8} h={8} _hover={{ color: 'gray.400' }} />
      </Link>

      {/* <Divider orientation="horizontal" /> */}
      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <Icon as={FaRegBookmark} w={8} h={8} _hover={{ color: 'gray.400' }} />
      </Link>
    </Flex>
  );
}
