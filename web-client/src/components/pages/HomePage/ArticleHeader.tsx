/* eslint-disable react/prop-types */
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Articles_articles } from '../../../schemaTypes';
import ArticleActions from './ArticleActions';
import ArticleUserInfo from './ArticleUserInfo';

type ArticleHeaderProps = {
  article: Articles_articles;
  onClick?: () => void;
};

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article, onClick }) => {
  console.log('Header article', article);
  return (
    <Flex
      justify="space-between"
      align="center"
      borderTopRadius={'2xl'}
      bgColor="gray.800"
    >
      <ArticleUserInfo
        pseudo={article.user?.pseudo}
        avatar={''}
        date={article?.date}
      />
      <ArticleActions
        numberLike={article?.likesArticle?.length}
        numberCom={article?.commentairesArticle?.length || 0}
        numberRegister={0}
        onClick={onClick}
      />
    </Flex>
  );
};

export default ArticleHeader;
