import { type } from 'os';
import React from 'react';
import { ReactComponent as IconLike } from '../../../assets/icons/icon_like.svg';
import data from '../../../data-samples/comment.json';

type CommentCardProps = {
  pseudo: string;
  date: string;
  avatar: string;
  content: string;
};
export default function CommentCard({
  pseudo,
  date,
  avatar,
  content,
}: CommentCardProps): JSX.Element {
  return (
    <section className=" mx-auto mb-5">
      <div className="flex bg-gray-800 text-white justify-between rounded-tr-lg p-4 items-center">
        <div className="flex flex-col md:flex-row  text-center md:text-left md:self-start items-center">
          <img
            className="rounded-full h-10 w-10 flex items-center justify-center"
            src={avatar}
            alt="avatar"
          />
          <span>{pseudo}</span>
          <span className="text-gray-400 pl-5">{date}</span>
        </div>
        <div>
          3
          <IconLike className="w-7 h-7 inline" />
        </div>
      </div>
      <div className="bg-white rounded-b-lg p-3">{content}</div>
    </section>
  );
}
