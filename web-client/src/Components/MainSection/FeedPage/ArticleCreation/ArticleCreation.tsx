import React, { useReducer } from 'react';
import ContentField from './ContentField';
import EditionTools from './EditionTools';
import './ArticleCreation.css';
import fieldsReducer from './fieldsReducer';

export default function ArticleCreation(): JSX.Element {
  const [fields, dispatch] = useReducer(fieldsReducer, [
    { contentType: 'Titre', value: 'This is a test' },
  ]);

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col w-2/3">
        {fields.map((field, index) => (
          <ContentField
            key={index}
            contentType={field.contentType}
            index={index}
            isFirst={index === 1}
            isLast={index === fields.length - 1}
            value={field.value}
            dispatch={dispatch}
          />
        ))}
      </div>
      <EditionTools dispatch={dispatch} />
    </div>
  );
}
