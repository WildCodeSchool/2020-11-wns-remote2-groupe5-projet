import React from 'react';

type ContentField = {
  content: string;
  contentType: string;
  placeNumber: number;
};

type ContentFieldsProps = {
  contentFields: ContentField[];
};

export default function ContentFields({
  contentFields,
}: ContentFieldsProps): JSX.Element {
  return (
    <div className="bg-red">
      {contentFields.map((contentField: ContentField) => {
        switch (contentField.contentType) {
          case 'Titre':
            return (
              <h3 className="font-bold uppercase text-xl mb-3">
                {contentField.content}
              </h3>
            );

          case 'Sous-titre':
            return (
              <h5 className="font-bold text-xl mb-3">{contentField.content}</h5>
            );
          case 'Paragraphe':
            return <p className="text-xl mb-3">{contentField.content}</p>;

          case 'Image':
            return (
              <img
                className="rounded-md mx-auto my-5"
                src="https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png"
                alt=""
              />
            );
        }
      })}
    </div>
  );
}
