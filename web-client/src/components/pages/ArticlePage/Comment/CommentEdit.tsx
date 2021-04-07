import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { CHECK_AUTH } from '../../../../queries/user-queries';
import GlobalContext from '../../../../utils/GlobalContext';

export default function CommentEdit(): JSX.Element {
  const pseudo = useContext(GlobalContext).user?.pseudo;
  return (
    <section className=" mx-auto mb-5">
      <div className="flex bg-gray-800 text-white justify-between rounded-tr-lg px-4 py-1 items-center">
        <div className="flex flex-col md:flex-row  text-center md:text-left md:self-start items-center">
          <img
            className="rounded-full h-10 w-10 flex items-center justify-center"
            src=""
            alt="avatar"
          />
          <span className="pl-4">{pseudo}</span>
        </div>
      </div>
      <div className="bg-white rounded-b-lg p-5 break-words">
        Votre Commentaire ...
      </div>
    </section>
  );
}
