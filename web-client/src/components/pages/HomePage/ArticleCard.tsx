import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Articles_articles } from '../../../schemaTypes';
import ArticleActions from './ArticleActions';
import ArticleHeader from './ArticleHeader';
import { FaArrowRight } from 'react-icons/fa';
type ArticleCardProps = {
  article: Articles_articles;
};

export default function ArticleCard({
  article,
}: ArticleCardProps): JSX.Element {
  console.log('articleCard', article);
  return (
    <Box>
      <ArticleHeader article={article} />
      <Box borderBottomRadius={'2xl'} bgColor="white" h="100%" w="100%">
        <Flex>
          <Box p={'8px'}>
            <Image
              borderRadius={'2xl'}
              src={
                'https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png'
              }
              alt={article?.title}
            />
          </Box>
          <Flex flexDir="column">
            <Flex flexDir="column" align="center">
              <Heading>{article.title}</Heading>
              <Text>{article.description}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box pos="relative" bottom="0px" left="0px">
          <Link to={'articles/' + article.articleID}>
            <Button
              bgColor="gray.900"
              textColor="white"
              rightIcon={<FaArrowRight />}
            >
              Lire la suite
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
