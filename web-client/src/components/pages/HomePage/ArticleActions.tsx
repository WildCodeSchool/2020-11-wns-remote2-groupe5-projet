/* eslint-disable react/prop-types */
import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { FcLike } from 'react-icons/fc';
import { FaRegCommentDots, FaRegBookmark } from 'react-icons/fa';
type ArticleActionsProps = {
  numberLike: number;
  numberCom: number;
  numberRegister?: number;
};

const ArticleActions: React.FC<ArticleActionsProps> = ({
  numberLike,
  numberCom,
  numberRegister,
}) => {
  return (
    <Flex flexDir="row" align="center" p={'4px'}>
      <Flex align="center" px={'4px'}>
        <Text color="white" pr={'4px'}>
          {numberLike}
        </Text>
        <FcLike />
      </Flex>
      <Flex align="center" px={'4px'}>
        <Text color="white" pr={'4px'}>
          {numberCom}
        </Text>
        <FaRegCommentDots color="white" />
      </Flex>
      <Flex align="center" px={'4px'}>
        <Text color="white" pr={'4px'}>
          {numberRegister}
        </Text>
        <FaRegBookmark color="white" />
      </Flex>
    </Flex>
  );
};

export default ArticleActions;
