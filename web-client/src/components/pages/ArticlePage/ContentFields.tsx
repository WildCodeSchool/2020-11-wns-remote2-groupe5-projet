import React from 'react';

type ContentField = {
  content: string;
  contentType: string;
  placeNumber: number;
};

type ContentFieldProps = ContentField[];

export default function ContentFields(contentFields: any): JSX.Element {
  console.log('contentFields', contentFields);
  return (
    <div className="bg-red">
      {contentFields.contentFields.map((contentField: any) => {
        if (contentField.contentType === 'Titre') {
          return (
            <h3 className="font-bold uppercase text-xl mb-3">
              {contentField.content}
            </h3>
          );
        }
        if (contentField.contentType === 'Sous-titre') {
          return (
            <h5 className="font-bold text-xl mb-3">{contentField.content}</h5>
          );
        }
        if (contentField.contentType === 'Paragraphe') {
          return <p className="text-xl mb-3">{contentField.content}</p>;
        }
      })}
    </div>
  );
}
