import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { BsHouseDoorFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { MdNotifications } from 'react-icons/md';
import { FaRegBookmark } from 'react-icons/fa';
import { Flex } from '@chakra-ui/layout';
import { Divider, Link, Icon } from '@chakra-ui/react';

export default function MainPanel(): JSX.Element {
  return (
    <Flex
      flexDir="row"
      color="white"
      justifyContent="space-around"
      align="center"
      bgColor="gray.800"
    >
      <Link as={ReachLink} to="/" m="8px">
        <Icon as={BsHouseDoorFill} w={8} h={8} />
      </Link>
      {/* <Divider orientation="horizontal" /> */}
      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <Icon as={BiEdit} w={8} h={8} />
      </Link>
      {/* <Divider orientation="horizontal" /> */}
      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <Icon as={MdNotifications} w={8} h={8} />
      </Link>

      {/* <Divider orientation="horizontal" /> */}
      <Link as={ReachLink} to="/articles/article-creation" m="8px">
        <Icon as={FaRegBookmark} w={8} h={8} />
      </Link>
    </Flex>
  );
}
