import React from 'react';
import ContentField from './ContentField';
import EditionTools from './EditionTools';
import './ArticleCreation.css';

export default function ArticleCreation(): JSX.Element {
  const fields = [1, 2, 3];

  return (
    <div className="flex flex-row">
      <div className="container flex flex-col">
        {fields.map((field) => (
          <ContentField key={field} />
        ))}
      </div>
      <EditionTools />
    </div>
  );
}
