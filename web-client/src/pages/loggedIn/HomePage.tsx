import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Flex } from '@chakra-ui/react';
import { Articles_articles } from '../../schemaTypes';
import ArticleCard from '../../components/Articles/Read/ArticleCard';
import { GET_ALL_ARTICLES } from '../../queries/article-queries';

export default function HomePage(): JSX.Element {
  const { data } = useQuery(GET_ALL_ARTICLES, { fetchPolicy: 'no-cache' });
  return (
    <Flex flexDir="column" align="center" justify="center" width="100%">
      {data &&
        data.articles.map((article: Articles_articles) => (
          <Box key={article.articleID} my="16px">
            <ArticleCard article={article} />
          </Box>
        ))}
    </Flex>
  );
}
