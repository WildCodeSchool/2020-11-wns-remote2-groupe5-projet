import React from 'react';
import ArticleCard from './ArticleCard';
import { GET_ALL_ARTICLES } from '../../../queries/article-queries';
import { useQuery } from '@apollo/client';
import { Articles_articles } from '../../../schemaTypes';
import { Box, Flex } from '@chakra-ui/react';

export default function HomePage(): JSX.Element {
  const { data } = useQuery(GET_ALL_ARTICLES);
  console.log('HomePage - data', data);
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      width="100%"
      mt="240px"
    >
      {data &&
        data.articles.map((article: Articles_articles) => (
          <Box key={article.articleID} m="4">
            <ArticleCard article={article} />
          </Box>
        ))}
    </Flex>
  );
}
