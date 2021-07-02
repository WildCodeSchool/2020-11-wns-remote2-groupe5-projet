/* eslint-disable react/prop-types */
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Articles_articles } from '../../../schemaTypes';
import ArticleActions from './ArticleActions';
import ArticleUserInfo from './ArticleUserInfo';

type ArticleHeaderProps = {
  article: Articles_articles;
  onClick?: () => void;
  isLiked?: boolean;
};

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  article,
  onClick,
  isLiked,
}) => {
  return (
    <Flex
      flexDir="row"
      justify="space-between"
      align="center"
      borderTopRadius={'2xl'}
      bgColor="gray.800"
      py="8px"
      px="4px"
    >
      <ArticleUserInfo
        pseudo={article.user?.pseudo}
        avatarFileName={article.user?.avatarFileName}
      />
      <ArticleActions
        numberLike={article?.likesArticle?.length || 0}
        numberCom={article?.commentairesArticle?.length || 0}
        numberRegister={0}
        onClick={onClick}
        isLiked={isLiked}
        date={article?.date}
      />
    </Flex>
  );
};

export default ArticleHeader;
