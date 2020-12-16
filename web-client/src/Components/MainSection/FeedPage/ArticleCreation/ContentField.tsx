import React from 'react';
import './ArticleCreation.css';

export default function ContentField(): JSX.Element {
  return (
    <div className="flex flex-col m-5">
      <div className="bg-black rounded-t-md">
        <div className="text-white">Paragraphe</div>
      </div>
      <textarea className="resize-y rounded-b-md"></textarea>
    </div>
  );
}
