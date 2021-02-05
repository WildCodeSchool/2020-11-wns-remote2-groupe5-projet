import { type } from 'os';
import React from 'react';

import data from '../../../data-samples/comment.json';
import moment from 'moment';
import { parseDateComment } from '../../../utils/Date';

type CommentCardProps = {
  pseudo: string;
  date: moment.unitOfTime.StartOf | any;
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
      <div className="flex bg-gray-800 text-white justify-between rounded-tr-lg px-4 py-1 items-center">
        <div className="flex flex-col md:flex-row  text-center md:text-left md:self-start items-center">
          <img
            className="rounded-full h-10 w-10 flex items-center justify-center"
            src={avatar}
            alt="avatar"
          />
          <span>{pseudo}</span>
          <span className="text-gray-400 pl-5">{parseDateComment(date)}</span>
        </div>
        <div>
          3<i className="fas fa-heart text-red-500"></i>
        </div>
      </div>
      <div className="bg-white rounded-b-lg p-3 break-words">{content}</div>
    </section>
  );
}
