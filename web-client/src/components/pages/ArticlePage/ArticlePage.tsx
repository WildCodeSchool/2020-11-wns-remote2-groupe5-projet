import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import GlobalContext from '../../../utils/GlobalContext';
import { useParams } from 'react-router-dom';
import { useMutation, useLazyQuery } from '@apollo/client';
import { GET_ONE_BY_ID, LIKE_ARTICLE } from '../../../queries/article-queries';
import { Articles_articles_likesArticle } from '../../../schemaTypes';
import ArticleHeader from '../HomePage/ArticleHeader';
import ContentFields from './ContentFields';
import CommentContainer from './Comment/CommentContainer';

export default function ArticlePage(): JSX.Element {
  const { articleID } = useParams<{ articleID: string }>();
  const [needToRefetch, setNeedToRefetch] = useState(false);
  const contextUserID = useContext(GlobalContext).user?.id;
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likeArticle] = useMutation(LIKE_ARTICLE);
  const [getArticleDetails, { data, refetch, called }] = useLazyQuery(
    GET_ONE_BY_ID,
    {
      variables: {
        articleID: articleID,
      },
      pollInterval: 250,
    }
  );

  useEffect(() => {
    getArticleDetails({
      variables: {
        articleID: articleID,
      },
    });
  }, [needToRefetch]);

  useEffect(() => {
    data &&
      setIsLiked(
        data.oneArticle.likesArticle.some(
          (like: Articles_articles_likesArticle) =>
            like.user.userID === contextUserID
        )
      );
  }, [data]);

  const switchLike = async () => {
    try {
      setIsLiked(!isLiked);
      await likeArticle({
        variables: {
          articleID: articleID,
        },
      });
    } catch (error) {
      console.log('ERROR', error);
    }
  };
  return (
    <Flex justify="space-around" w="100%" p={'16px'} h="100vh">
      <Box w="70%">
        {data && (
          <ArticleHeader article={data.oneArticle} onClick={switchLike} />
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
            alt={data?.oneArticle?.title}
          />
          {data && (
            <ContentFields contentFields={data.oneArticle.contentFields} />
          )}
        </Flex>
      </Box>
      <Box>
        <CommentContainer
          articleID={articleID}
          comments={data?.oneArticle?.commentairesArticle}
          needToRefetch={needToRefetch}
          setNeedToRefetch={setNeedToRefetch}
        />
      </Box>
    </Flex>
  );
}
