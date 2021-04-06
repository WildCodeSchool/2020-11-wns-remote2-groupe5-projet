/* eslint-disable react/prop-types */
import React from 'react';

import data from '../../../../data-samples/comment.json';
import CommentCard from './CommentCard';
import CommentEdit from './CommentEdit';
import './Comment.css';

type CommentContainerProps = {
  articleID: string;
};

const CommentContainer: React.FC<CommentContainerProps> = ({ articleID }) => {
  return (
    <div className="w-1/4 mt-0 py-1 ml-3">
      {data.map((comment) => {
        return (
          <CommentCard
            key={comment.CommentaireArticleID}
            pseudo={comment.User.Pseudo}
            date={comment.Date as moment.unitOfTime.StartOf}
            avatar={comment.User.Avatar}
            content={comment.Content}
          />
        );
      })}
      <CommentEdit articleID={articleID} />
    </div>
  );
};

export default CommentContainer;
