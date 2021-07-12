import React, { useContext } from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { NavLink, useParams } from 'react-router-dom';
import ArticleHeader from '../../components/Articles/Read/ArticleHeader';
import ContentFields from '../../components/Articles/Read/ContentFields';
import CommentContainer from '../../components/Articles/Comment/CommentContainer';
import { useGetArticleAndSubscribeToChanges } from '../../customhooks/useGetArticleAndSubscribeToChanges';
import { useMutation } from '@apollo/client';
import { DELETE_ARTICLE } from '../../queries/article-queries';

export default function ArticlePage(): JSX.Element {
  const { articleID } = useParams<{ articleID: string }>();
  const { currentUser } = useContext(CurrentUserContext);
  const { article, isLiked, switchLikeArticle } =
    useGetArticleAndSubscribeToChanges(currentUser?.id, articleID);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [deleteArticle] = useMutation(DELETE_ARTICLE, {
    variables: {
      articleID: articleID,
    },
  });

  const onDeleteArticle = async () => {
    try {
      await deleteArticle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      justify="space-around"
      w="100%"
      p={['2px', '16px']}
      flexDir={['column', 'column', 'column', 'row']}
    >
      <Box w={['98%', '98%', '65%', '65%']} mx="auto" mb="20px">
        {article && (
          <ArticleHeader
            article={article.oneArticle}
            onClick={switchLikeArticle}
            onDeleteArticle={onOpen}
            isLiked={isLiked}
          />
        )}
        <Flex
          flexDir="column"
          align="center"
          borderBottomRadius={'2xl'}
          bgColor="white"
        >
          {article && (
            <ContentFields
              contentFields={article.oneArticle.contentFields}
              articleId={article.oneArticle.articleID}
            />
          )}
        </Flex>
      </Box>
      <Box mx="16px">
        <CommentContainer
          articleID={articleID}
          comments={article?.oneArticle?.commentairesArticle}
        />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="gray.800">
          <ModalHeader color="#FFF">
            Etes-vous sur de supprimer l'article ?
          </ModalHeader>
          <ModalCloseButton color="#FFF" />
          <ModalFooter>
            <Button color="#FFF" variant="ghost" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <NavLink to="/">
              <Button color="red.300" onClick={onDeleteArticle} variant="error">
                Supprimer
              </Button>
            </NavLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
