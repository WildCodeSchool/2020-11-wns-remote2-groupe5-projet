import { useState, Dispatch, SetStateAction } from 'react';
import { useMutation } from '@apollo/client';
import { PUBLISH_ARTICLE } from '../queries/article-queries';
import path from 'path';
import { UPLOAD_ARTICLE_PICTURE } from '../queries/picture-queries';
import { useToast } from '@chakra-ui/react';
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
  const toast = useToast();

  const [publishModal, setPublishModal] = useState(false);

  const [publishArticle] = useMutation(PUBLISH_ARTICLE);

  const [uploadPicture] = useMutation(UPLOAD_ARTICLE_PICTURE);

  const postPicture = async (
    file: File,
    articleId: string,
    fileName: string
  ) => {
    try {
      await uploadPicture({
        variables: { file, articleId, fileName },
      });
      toast({
        description: 'Image upload! :)',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const postArticle = async (description: string): Promise<void> => {
    try {
      const result = await publishArticle({
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

      fields.forEach((item, index) => {
        if (item.contentType === 'Image' && item.file) {
          postPicture(
            item.file,
            result.data.createArticle.articleID,
            index.toString() + path.extname(item.file?.name)
          );
        }
      });

      setPublishModal(false);
      toast({
        description: 'Article posté !',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
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
