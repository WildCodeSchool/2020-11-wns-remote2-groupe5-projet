import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Articles_articles } from '../../../schemaTypes';
import ArticleHeader from './ArticleHeader';
import { FaArrowRight } from 'react-icons/fa';

type ArticleCardProps = {
  article: Articles_articles;
};

export default function ArticleCard({
  article,
}: ArticleCardProps): JSX.Element {
  return (
    <Box>
      <ArticleHeader article={article} />
      <Box borderBottomRadius={'2xl'} bgColor="white">
        <Flex justify="space-between">
          {/* <Box p={'8px'}>
            <Image
              h="212px"
              w="212px"
              borderRadius={'2xl'}
              src={
                'https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png'
              }
              alt={article?.title}
            />
          </Box> */}
          <Flex flexDir="column" justifyContent="space-between">
            <Flex flexDir="column" align="center">
              <Heading
                as="h3"
                size="lg"
                noOfLines={1}
                isTruncated
                paddingTop="8px"
                paddingBottom="4px"
              >
                {article.title}
              </Heading>
              <Box padding={'8px'}>
                <Text align="center" w="lg" noOfLines={4}>
                  {article.description}
                </Text>
              </Box>
            </Flex>
            <Flex flexDir="row-reverse">
              <Link to={'articles/' + article.articleID}>
                <Button
                  bgColor="gray.900"
                  textColor="white"
                  rightIcon={<FaArrowRight />}
                >
                  Lire la suite
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
