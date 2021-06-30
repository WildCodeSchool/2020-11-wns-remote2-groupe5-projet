/* eslint-disable react/prop-types */
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import {
  FaRegCommentDots,
  FaRegBookmark,
  FaRegHeart,
  FaHeart,
} from 'react-icons/fa';

type ArticleActionsProps = {
  numberLike: number;
  numberCom: number;
  numberRegister?: number;
  onClick?: () => void;
  isLiked?: boolean;
};

const ArticleActions: React.FC<ArticleActionsProps> = ({
  numberLike,
  numberCom,
  numberRegister,
  onClick,
  isLiked,
}) => {

  return (
    <Box>
      <Flex flexDir="row" align="center" p={'4px'}>
        <Flex align="center" px={'4px'}>
          {onClick ? (
            <Button
              p={0}
              size="sm"
              variant="outlined"
              aria-label="like"
              onClick={onClick}
            >
              <Text color="white" pr={'4px'}>
                {numberLike}
              </Text>
              {numberLike === 0 ? (
                <FaRegHeart color="white" />
              ) : (
                !isLiked ? (
                  <FaRegHeart color="white" />
                ) : (
                  <FaHeart color="white" />
                )
              )}
            </Button>
          ) : (
            <>
              <Text color="white" pr={'4px'}>
                {numberLike}
              </Text>
              {isLiked ? (
                <FaRegHeart color="white" />
              ) : (
                <FaHeart color="white" />
              )}
            </>
          )}
        </Flex>
        <Text color="white" pr={'4px'}>
          {numberCom}
        </Text>
        <FaRegCommentDots color="white" />
        <Flex align="center" px={'4px'}>
          <Text color="white" pr={'4px'}>
            {numberRegister}
          </Text>
          <FaRegBookmark color="white" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ArticleActions;
