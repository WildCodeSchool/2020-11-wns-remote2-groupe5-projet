/* eslint-disable react/prop-types */
import React, { Dispatch, SetStateAction } from 'react';

import CommentCard from './CommentCard';
import CommentEdit from './CommentEdit';
import { OneArticle_oneArticle_commentairesArticle } from '../../../../schemaTypes';
import { Flex } from '@chakra-ui/react';

type CommentContainerProps = {
  articleID: string;
  comments?: OneArticle_oneArticle_commentairesArticle[];
  needToRefetch?: boolean;
  setNeedToRefetch: Dispatch<SetStateAction<boolean>>;
};

const CommentContainer: React.FC<CommentContainerProps> = ({
  articleID,
  comments,
  needToRefetch,
  setNeedToRefetch,
}) => {
  return (
    <Flex flexDir="column" justify="center" w="100%" align="center">
      {comments &&
        comments.map((comment: OneArticle_oneArticle_commentairesArticle) => {
          return (
            <CommentCard
              key={comment.contentFieldID}
              pseudo={comment.user.pseudo}
              date={comment.date}
              //avatar={comment.avatar}
              content={comment.commentaire}
            />
          );
        })}
      <CommentEdit
        articleID={articleID}
        setNeedToRefetch={setNeedToRefetch}
        needToRefetch={needToRefetch}
      />
    </Flex>
  );
};

export default CommentContainer;
