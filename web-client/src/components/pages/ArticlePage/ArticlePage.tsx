import React, { useContext } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import GlobalContext from '../../../utils/GlobalContext';
import { useParams } from 'react-router-dom';
import ArticleHeader from '../HomePage/ArticleHeader';
import ContentFields from './ContentFields';
import CommentContainer from './Comment/CommentContainer';
import { useGetArticleAndSubscribeToChanges } from './useGetArticleAndSubscribeToChanges';
import './ArticlePage.css';

export default function ArticlePage(): JSX.Element {
  const { articleID } = useParams<{ articleID: string }>();
  const userID = useContext(GlobalContext).user?.id;

  const {
    article,
    isLiked,
    switchLikeArticle,
  } = useGetArticleAndSubscribeToChanges(userID, articleID);

  return (
    <Flex justify="space-around" w="100%" p={['2px','16px']} h="100vh"  flexDir={["column","column","column","row"]}>
      <Box w={["90%","90%","70%","70%"]} mx="auto" mb="20px">
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
            w={{base:"160px",sm:"200px",md:"260px",lg:"300px"}}
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
      <Box mx="auto">
        <CommentContainer
          articleID={articleID}
          comments={article?.oneArticle?.commentairesArticle}
        />
      </Box>
    </Flex>
  );
}
