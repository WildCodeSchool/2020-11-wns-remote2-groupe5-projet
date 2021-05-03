/* eslint-disable react/prop-types */
import React from 'react';
import CommentCard from './CommentCard';
import CommentEdit from './CommentEdit';
import { OneArticle_oneArticle_commentairesArticle } from '../../../../schemaTypes';
import { Flex } from '@chakra-ui/react';

type CommentContainerProps = {
  articleID: string;
  comments?: OneArticle_oneArticle_commentairesArticle[];
};

const CommentContainer: React.FC<CommentContainerProps> = ({
  articleID,
  comments,
}) => {
  return (
    <Flex flexDir="column" w="100%">
      {comments &&
        comments.map((comment: OneArticle_oneArticle_commentairesArticle) => {
          return (
            <CommentCard
              key={comment.contentFieldID}
              pseudo={comment.user.pseudo}
              date={comment.date}
              content={comment.commentaire}
            />
          );
        })}
      <CommentEdit articleID={articleID} />
    </Flex>
  );
};

export default CommentContainer;
