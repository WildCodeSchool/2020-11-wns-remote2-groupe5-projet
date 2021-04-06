/* eslint-disable react/prop-types */
import React from 'react';

import data from '../../../../data-samples/comment.json';
import CommentCard from './CommentCard';
import CommentEdit from './CommentEdit';
import './Comment.css';

type CommentContainerProps = {
  articleID: string;
  comments?: any;
};

const CommentContainer: React.FC<CommentContainerProps> = ({
  articleID,
  comments,
}) => {
  console.log('comments', comments);
  return (
    <div className="w-1/4 mt-0 py-1 ml-3">
      {comments &&
        comments.map((comment: any) => {
          return (
            <CommentCard
              key={comment.CommentaireArticleID}
              pseudo={comment.user.pseudo}
              date={comment.date}
              //avatar={comment.User.Avatar}
              content={comment.commentaire}
            />
          );
        })}
      <CommentEdit articleID={articleID} />
    </div>
  );
};

export default CommentContainer;
