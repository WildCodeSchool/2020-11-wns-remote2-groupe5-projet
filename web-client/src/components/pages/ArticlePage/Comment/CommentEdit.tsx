/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import GlobalContext from '../../../../utils/GlobalContext';
import InputCustom from '../../../common/helpers/InputCustom';
import { CREATE_COMMENT } from '../../../../queries/article-queries';

type CommentEditProps = {
  articleID: string;
};

const CommentEdit: React.FC<CommentEditProps> = ({
  articleID,
}): JSX.Element => {
  const user = useContext(GlobalContext).user;
  const [comment, setComment] = useState('');
  const [createComment] = useMutation(CREATE_COMMENT);
  console.log('CommentEdit', articleID);

  const submit = async () => {
    try {
      const res = await createComment({
        variables: {
          articleID: articleID,
          date: new Date().toISOString(),
          commentaire: comment,
        },
      });
    } catch (error) {
      console.log('an error occured', error);
    }
  };

  return (
    <section className=" mx-auto mb-5">
      <div className="flex bg-gray-800 text-white justify-between rounded-tr-lg px-4 py-1 items-center">
        <div className="flex flex-col md:flex-row  text-center md:text-left md:self-start items-center">
          <img
            className="rounded-full h-10 w-10 flex items-center justify-center"
            src=""
            alt="avatar"
          />
          <span className="pl-4">{user?.pseudo}</span>
        </div>
      </div>
      <div className="bg-white rounded-b-lg p-5 break-words">
        <InputCustom
          placeholder="Votre commentaire"
          type="text"
          value={comment}
          setValue={(c) => setComment(c)}
        />
        <button type="submit" onClick={submit}>
          Commenter
        </button>
      </div>
    </section>
  );
};

export default CommentEdit;
