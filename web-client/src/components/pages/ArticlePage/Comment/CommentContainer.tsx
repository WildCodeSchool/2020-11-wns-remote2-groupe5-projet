/* eslint-disable react/prop-types */
import React, { Dispatch, SetStateAction } from 'react';

import CommentCard from './CommentCard';
import CommentEdit from './CommentEdit';
import './Comment.css';
import { OneArticle_oneArticle_commentairesArticle } from '../../../../schemaTypes';

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
  // console.log('comments', comments);
  return (
    <div className="w-1/4 mt-0 py-1 ml-3">
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
    </div>
  );
};

export default CommentContainer;
