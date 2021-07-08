import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { Articles_articles } from '../../../schemaTypes';
import ArticleActions from './ArticleActions';
import ArticleCommunities from './ArticleCommunities';
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
      align={['center']}
      borderTopRadius={'2xl'}
      bgColor="gray.800"
      py="8px"
      px="4px"
    >
      <Flex direction={['column', 'column', 'row', 'row']} alignItems="center">
        <ArticleUserInfo
          pseudo={article.user?.pseudo}
          avatarFileName={article.user?.avatarFileName}
        />
        <Box marginLeft={['7px', '7px', '30px', '30px']}>
          <ArticleCommunities communities={['DEV', 'javascript']} />
        </Box>
      </Flex>
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
