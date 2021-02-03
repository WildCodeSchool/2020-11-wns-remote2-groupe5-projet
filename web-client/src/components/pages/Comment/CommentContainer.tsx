import React from 'react';
import { ReactComponent as IconLike } from '../../../assets/icons/icon_like.svg';
import data from '../../../data-samples/comment.json';
import CommentCard from './CommentCard';

export default function CommentContainer(): JSX.Element {
  return (
    <div className="">
      {data.map((comment) => {
        return (
          <CommentCard
            key={comment.CommentaireArticleID}
            pseudo={comment.User.Pseudo}
            date={comment.Date}
            avatar={comment.User.Avatar}
            content={comment.Content}
          />
        );
      })}

      {/* <section className=" mx-auto">
        <div className="flex bg-gray-800 text-white justify-between rounded-tr-lg p-4 items-center">
          <div className="flex flex-col md:flex-row  text-center md:text-left md:self-start items-center">
            <img
              className="rounded-full h-10 w-10 flex items-center justify-center"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
            <span>User name</span>
          </div>
        </div>
        <div className="bg-white rounded-b-lg p-3">Votre commentaire ...</div>
      </section> */}
    </div>
  );
}
