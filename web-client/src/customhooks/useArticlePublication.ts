import { useState, Dispatch, SetStateAction } from 'react';
import { useMutation } from '@apollo/client';
import { PUBLISH_ARTICLE } from '../queries/article-queries';
import path from 'path';
export const useArticlePublication = (
  fields: {
    contentType: string;
    value: string;
    file?: File | null | undefined;
  }[]
): {
  postArticle: (description: string) => Promise<void>;
  defaultDescription: () => string;
  publishModal: boolean;
  setPublishModal: Dispatch<SetStateAction<boolean>>;
  openPublishModal: () => void;
} => {
  const [publishModal, setPublishModal] = useState(false);

  const [publishArticle] = useMutation(PUBLISH_ARTICLE);
  const postArticle = async (description: string): Promise<void> => {
    try {
      await publishArticle({
        variables: {
          data: { date: new Date(), title: fields[0].value, description },
          fields: fields.map((field, index) => {
            if (field.contentType === 'Image') {
              if (field.file?.name) {
                return {
                  contentType: field.contentType,
                  content: index.toString() + path.extname(field.file?.name),
                  placeNumber: index,
                };
              } else {
                return {
                  contentType: field.contentType,
                  content: 'EMPTY',
                  placeNumber: index,
                };
              }
            }
            return {
              contentType: field.contentType,
              content: field.value,
              placeNumber: index,
            };
          }),
        },
      });
      setPublishModal(false);
      alert('Article posté :)');
    } catch (error) {
      console.log(error);
      alert('Erreur => go voir la console');
    }
  };

  const defaultDescription = () => {
    return (
      (fields.some((field) => field.contentType === 'Paragraphe') &&
        fields.filter((field) => {
          return field.contentType === 'Paragraphe';
        })[0].value) ||
      ''
    );
  };

  const openPublishModal = () => {
    if (fields[0].value.length < 3) {
      alert("Veuillez ajouter un titre d'au moins 3 caractères");
    } else if (fields.length < 2) {
      alert('Veuillez ajouter au moins un champs');
    } else {
      setPublishModal(true);
    }
  };

  return {
    postArticle,
    defaultDescription,
    publishModal,
    setPublishModal,
    openPublishModal,
  };
};
