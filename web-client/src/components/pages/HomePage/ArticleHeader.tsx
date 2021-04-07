/* eslint-disable react/prop-types */
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Articles_articles } from '../../../schemaTypes';
import ArticleActions from './ArticleActions';
import ArticleUserInfo from './ArticleUserInfo';

type ArticleHeaderProps = { article: Articles_articles };

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  return (
    <Flex justify="space-between" bgColor="gray.800" borderTopRadius={'xl'}>
      <ArticleUserInfo
        pseudo={article.user?.pseudo}
        avatar={''}
        date={article?.date}
      />
      <ArticleActions
        numberLike={article?.likesArticle?.length}
        numberCom={article?.commentairesArticle?.length || 0}
        numberRegister={0}
      />
    </Flex>
  );
};

export default ArticleHeader;
