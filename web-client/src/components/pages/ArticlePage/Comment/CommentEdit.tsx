/* eslint-disable react/prop-types */
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import GlobalContext from '../../../../utils/GlobalContext';
import InputCustom from '../../../common/helpers/InputCustom';
import { CREATE_COMMENT } from '../../../../queries/article-queries';

type CommentEditProps = {
  articleID: string;
  needToRefetch?: boolean;
  setNeedToRefetch: Dispatch<SetStateAction<boolean>>;
};

const CommentEdit: React.FC<CommentEditProps> = ({
  articleID,
  needToRefetch,
  setNeedToRefetch,
}): JSX.Element => {
  const user = useContext(GlobalContext).user;
  const [comment, setComment] = useState('');
  const [createComment] = useMutation(CREATE_COMMENT);

  const submit = async () => {
    try {
      const res = await createComment({
        variables: {
          articleID: articleID,
          date: new Date().toISOString(),
          commentaire: comment,
        },
      });
      setNeedToRefetch(!needToRefetch);
      setComment('');
    } catch (error) {
      console.log('an error occured', error);
    }
  };

  return (
    <section className="mx-auto mb-5">
      <div className="flex bg-gray-800 text-white justify-between rounded-t-lg px-4 py-1 items-center">
        <div className="flex flex-col md:flex-row  text-center md:text-left md:self-start items-center">
          <img
            className="rounded-full h-10 w-10 flex items-center justify-center"
            src=""
            alt="avatar"
          />
          <span className="pl-4">{user?.pseudo}</span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white rounded-bl-lg p-5 break-words">
        {/* <InputCustom
          placeholder="Votre commentaire"
          type="textarea"
          value={comment}
          setValue={(c) => setComment(c)}
          noPlaceholder
          noPadding
        /> */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Votre commentaire"
        />
        {comment === '' ? (
          <button type="submit" onClick={submit} disabled>
            <i className="fas fa-paper-plane text-gray-400"></i>
          </button>
        ) : (
          <button type="submit" onClick={submit}>
            <i className="fas fa-paper-plane text-gray-800"></i>
          </button>
        )}
      </div>
    </section>
  );
};

export default CommentEdit;
