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
  const {currentUser} = useContext(CurrentUserContext);

  const {
    article,
    isLiked,
    switchLikeArticle,
  } = useGetArticleAndSubscribeToChanges(currentUser?.id, articleID);

  return (
    <Flex justify="space-around" w="100%" p={'16px'} h="100vh">
      <Box w="70%">
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
          <Image
            h="212px"
            w="212px"
            borderRadius={'2xl'}
            src={
              'https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png'
            }
            alt={article?.oneArticle?.title}
          />
          {article && (
            <ContentFields contentFields={article.oneArticle.contentFields} />
          )}
        </Flex>
      </Box>
      <Box>
        <CommentContainer
          articleID={articleID}
          comments={article?.oneArticle?.commentairesArticle}
        />
      </Box>
    </Flex>
  );
}
