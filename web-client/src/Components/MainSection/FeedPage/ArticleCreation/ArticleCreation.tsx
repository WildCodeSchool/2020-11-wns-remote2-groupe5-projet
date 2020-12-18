import React from 'react';
import ContentField from './ContentField';
import EditionTools from './EditionTools';
import './ArticleCreation.css';

export default function ArticleCreation(): JSX.Element {
  const fields = [1, 2, 3];

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col w-2/3">
        {fields.map((field) => (
          <ContentField key={field} />
        ))}
      </div>
      <EditionTools />
    </div>
  );
}
