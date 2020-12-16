import React from 'react';
import './ArticleCreation.css';

export default function EditionTools(): JSX.Element {
  const contentTypes = ['Titre', 'Sous-titre', 'Paragraphe', 'Lien', 'Image'];

  return (
    <ul>
      {contentTypes.map((type) => {
        return <li key={type}>{type}</li>;
      })}
      <li>Aperçu</li>
      <li>Publier</li>
    </ul>
  );
}
