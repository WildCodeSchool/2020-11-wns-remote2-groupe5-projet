import { useMutation } from '@apollo/client';
import { PUBLISH_ARTICLE } from '../queries/article-queries';
import path from 'path';
import { UPLOAD_ARTICLE_PICTURE } from '../queries/picture-queries';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export const useArticlePublication = (
  fields: {
    contentType: string;
    value: string;
    file?: File | null | undefined;
  }[]
): {
  postArticle: (description: string) => Promise<void>;
  defaultDescription: () => string;
  openPublishModal: () => void;
  modalIsOpen: boolean;
  modalOnOpen: () => void;
  modalOnClose: () => void;
} => {
  const toast = useToast();
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();

  const history = useHistory();

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
    } catch (err) {
      console.error(err);
      toast({
        description: "Erreur durant l'upload d'une image",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  const postArticle = async (description: string): Promise<void> => {
    if (description.length < 50) {
      toast({
        description: "Veuillez écrire une description d'au moins 50 caractères",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
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

      modalOnClose();
      toast({
        description: 'Article posté !',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      history.push('/');
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
      toast({
        description: "Veuillez ajouter un titre d'au moins 3 caractères",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } else if (fields.length < 2) {
      toast({
        description: 'Veuillez ajouter au moins un champs',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } else if (
      fields.filter((field) => {
        if (field.contentType === 'Image' && !field.file) {
          return true;
        } else if (field.contentType !== 'Image' && !field.value.length) {
          return true;
        } else {
          return false;
        }
      }).length
    ) {
      toast({
        description: 'Veuillez remplir tout les champs',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } else {
      modalOnOpen();
    }
  };

  return {
    postArticle,
    defaultDescription,
    openPublishModal,
    modalIsOpen,
    modalOnOpen,
    modalOnClose,
  };
};
