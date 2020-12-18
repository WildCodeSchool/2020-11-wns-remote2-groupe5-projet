import React from 'react';
import { ReactComponent as IconPlus } from '../../../../assets/icons/icon_plus.svg';
import { ReactComponent as IconApercu } from '../../../../assets/icons/icon_apercu.svg';
import { ReactComponent as IconSend } from '../../../../assets/icons/icon_send.svg';
import './ArticleCreation.css';

export default function EditionTools(): JSX.Element {
  const contentTypes = ['Titre', 'Sous-titre', 'Paragraphe', 'Lien', 'Image'];

  return (
    <section className="fixed right-0 h-full flex">
      <ul className="self-center bg-black rounded-l-xl text-white">
        {contentTypes.map((type) => {
          return (
            <>
              <li key={type} className="flex items-center mr-4 ml-2">
                <IconPlus className="w-9 h-9" />
                <span className="text-xl m-3">{type}</span>
              </li>
              <li className="flex justify-center">
                <hr className="w-3/4" />
              </li>
            </>
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
