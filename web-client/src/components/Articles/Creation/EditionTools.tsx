import React, { Fragment } from 'react';

import { Action, ContentType } from '../../../reducers/fieldsReducer';

type EdtitionToolsProps = {
  dispatch: React.Dispatch<Action>;
  openPublishModal: () => void;
};

export default function EditionTools({
  dispatch,
  openPublishModal,
}: EdtitionToolsProps): JSX.Element {
  const contentTypes: ContentType[] = [
    'Sous-titre',
    'Paragraphe',
    'Lien',
    'Image',
  ];

  return (
    <section className="fixed right-0 h-full flex">
      <ul className="self-center bg-gray-800 rounded-l-xl text-white">
        {contentTypes.map((contentType, index) => {
          return (
            <Fragment key={index}>
              <li
                onClick={() => {
                  dispatch({ type: 'ADD', payload: { contentType } });
                }}
                className="flex items-center mr-4 ml-2 cursor-pointer hover:text-gray-400"
              >
                <i className="fas fa-plus border-2 rounded-full p-2"></i>
                <span className="text-xl m-3">{contentType}</span>
              </li>
              <li className="flex justify-center">
                <hr className="w-3/4" />
              </li>
            </Fragment>
          );
        })}
        <li className="flex items-center mr-4 ml-1 cursor-pointer hover:text-gray-400">
          <i className="fas fa-eye m-2 my-3 text-2xl"></i>
          <span className="text-xl m-3">Aperçu</span>
        </li>
        <li className="flex justify-center">
          <hr className="w-3/4" />
        </li>
        <li
          onClick={() => openPublishModal()}
          className="flex items-center mr-4 ml-2 cursor-pointer hover:text-gray-400"
        >
          <i className="far fa-paper-plane text-2xl"></i>
          <span className="text-xl m-3 ml-5">Publier</span>
        </li>
      </ul>
    </section>
  );
}
