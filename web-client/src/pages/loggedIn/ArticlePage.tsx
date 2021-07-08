import React, { useContext } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/Articles/Read/ArticleHeader';
import ContentFields from '../../components/Articles/Read/ContentFields';
import CommentContainer from '../../components/Articles/Comment/CommentContainer';
import { useGetArticleAndSubscribeToChanges } from '../../customhooks/useGetArticleAndSubscribeToChanges';

export default function ArticlePage(): JSX.Element {
  const { articleID } = useParams<{ articleID: string }>();
  const { currentUser } = useContext(CurrentUserContext);

  const { article, isLiked, switchLikeArticle } =
    useGetArticleAndSubscribeToChanges(currentUser?.id, articleID);

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
      <Box mx="auto">
        <CommentContainer
          articleID={articleID}
          comments={article?.oneArticle?.commentairesArticle}
        />
      </Box>
    </Flex>
  );
}
