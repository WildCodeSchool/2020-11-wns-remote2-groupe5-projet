import React, { Fragment } from 'react';
import { ReactComponent as IconPlus } from '../../../assets/icons/icon_plus.svg';
import { ReactComponent as IconApercu } from '../../../assets/icons/icon_apercu.svg';
import { ReactComponent as IconSend } from '../../../assets/icons/icon_send.svg';
import { Action, ContentType } from './fieldsReducer';

type EdtitionToolsProps = {
  dispatch: React.Dispatch<Action>;
};

export default function EditionTools({
  dispatch,
}: EdtitionToolsProps): JSX.Element {
  const contentTypes: ContentType[] = [
    'Sous-titre',
    'Paragraphe',
    'Lien',
    'Image',
  ];

  return (
    <section className="fixed right-0 h-full flex">
      <ul className="self-center bg-black rounded-l-xl text-white">
        {contentTypes.map((contentType, index) => {
          return (
            <Fragment key={index}>
              <li
                onClick={() => {
                  dispatch({ type: 'ADD', payload: { contentType } });
                }}
                className="flex items-center mr-4 ml-2"
              >
                <IconPlus className="w-9 h-9" />
                <span className="text-xl m-3">{contentType}</span>
              </li>
              <li className="flex justify-center">
                <hr className="w-3/4" />
              </li>
            </Fragment>
          );
        })}
        <li className="flex items-center mr-4 ml-2">
          <IconApercu className="w-9 h-9" />
          <span className="text-xl m-3">Aperçu</span>
        </li>
        <li className="flex justify-center">
          <hr className="w-3/4" />
        </li>
        <li className="flex items-center mr-4 ml-2">
          <IconSend className="w-9 h-9" />
          <span className="text-xl m-3">Publier</span>
        </li>
      </ul>
    </section>
  );
}