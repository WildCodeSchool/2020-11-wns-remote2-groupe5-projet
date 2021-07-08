import { Text, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import {
  FaRegCommentDots,
  FaRegBookmark,
  FaRegHeart,
  FaHeart,
} from 'react-icons/fa';
import { parseRelativeTime } from '../../../utils/Date';

type ArticleActionsProps = {
  numberLike: number;
  numberCom: number;
  numberRegister?: number;
  date: string;
  onClick?: () => void;
  isLiked?: boolean;
};

const ArticleActions: React.FC<ArticleActionsProps> = ({
  numberLike,
  numberCom,
  numberRegister,
  onClick,
  isLiked,
  date,
}) => {
  return (
    <Flex direction="column" alignItems="flex-end" marginRight="5px">
      <Flex flexDir="row" align="center" fontSize="16px" marginBottom="5px">
        <Flex align="center">
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
              ) : !isLiked ? (
                <FaRegHeart color="white" />
              ) : (
                <FaHeart color="white" />
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
        <Text color="white" pr={'4px'} marginLeft="7px">
          {numberCom}
        </Text>
        <FaRegCommentDots color="white" />
        <Flex align="center" marginLeft="7px">
          <Text color="white" pr={'4px'}>
            {numberRegister}
          </Text>
          <FaRegBookmark color="white" />
        </Flex>
      </Flex>
      <Text fontSize="sm" color="white" fontStyle="italic">
        {parseRelativeTime(date)}
      </Text>
    </Flex>
  );
};

export default ArticleActions;
