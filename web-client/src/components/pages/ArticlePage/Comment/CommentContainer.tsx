/* eslint-disable react/prop-types */
import React from 'react';
import CommentCard from './CommentCard';
import CommentEdit from './CommentEdit';
import { OneArticle_oneArticle_commentairesArticle } from '../../../../schemaTypes';
import './Comment.css';

type CommentContainerProps = {
  articleID: string;
  comments?: OneArticle_oneArticle_commentairesArticle[];
};

const CommentContainer: React.FC<CommentContainerProps> = ({
  articleID,
  comments,
}) => {
  return (
    <div className="w-1/4 mt-0 py-1 ml-3">
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
    </div>
  );
};

export default CommentContainer;
