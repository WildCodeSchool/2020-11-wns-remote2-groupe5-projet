import React from 'react';
import { ReactComponent as IconTrash } from '../../../../assets/icons/icon_trash.svg';
import { ReactComponent as IconArrow } from '../../../../assets/icons/icon_simple_arrow_up.svg';
import './ArticleCreation.css';

export default function ContentField(): JSX.Element {
  return (
    <section className="flex flex-col m-4">
      <div className="bg-black rounded-t-md">
        <div className="flex items-center justify-between text-white">
          <span>Paragraphe</span>
          <div className="flex">
            <IconArrow className="w-10 h-10" />
            <IconArrow className="w-10 h-10 transform rotate-180" />
            <IconTrash className="w-10 h-10" />
          </div>
        </div>
      </div>
      <textarea className="resize-y rounded-b-md"></textarea>
    </section>
  );
}
