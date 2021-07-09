import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Grid,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
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
  const [image, setImage] = useState<String | null>(null);

  useEffect(() => {
    const firstImage = article.contentFields.find(
      (item) => item.contentType === 'Image'
    );
    if (firstImage) {
      setImage(firstImage.content);
    }
  }, [article]);

  return (
    <Box
    // minWidth="302px"
    // w={{
    //   base: '320px',
    //   sm: '440px',
    //   md: '600px',
    //   lg: '700px',
    //   xl: '700px',
    // }}
    >
      <ArticleHeader article={article} />
      <Box borderBottomRadius={'2xl'} bgColor="white">
        <Flex direction="column">
          <Heading
            as="h3"
            size="lg"
            marginBottom="25px"
            marginTop="20px"
            textAlign="center"
            width="75%"
            alignSelf="center"
          >
            {article.title}
          </Heading>
          <Grid
            templateColumns={
              image
                ? [
                    'repeat(1, 1fr)',
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                    'repeat(2, 1fr)',
                  ]
                : ['repeat(1, 1fr)']
            }
          >
            {image && (
              <Flex justifyContent="center" p={'8px'} width="100%">
                <Image
                  width={['100%', '100%', '80%', '80%']}
                  rounded="lg"
                  src={
                    image === null
                      ? undefined
                      : document.location.origin +
                        '/public/media/articles/' +
                        article.articleID +
                        '/' +
                        image
                  }
                  alt={article?.title}
                />
              </Flex>
            )}

            <Flex
              flexDir="column"
              align="flex-start"
              marginBottom="30px"
              marginRight={['0', '0', '40px', '40px']}
              marginLeft={image ? ['0'] : ['0', '0', '40px', '40px']}
            >
              <Box padding={'8px'}>
                <Text align="justify" noOfLines={12}>
                  {article.description}
                </Text>
              </Box>
            </Flex>
          </Grid>

          <Flex justify="flex-end">
            <Link to={'articles/' + article.articleID}>
              <Button
                bgColor="gray.800"
                textColor="white"
                rightIcon={<FaArrowRight />}
                letterSpacing="2px"
                borderBottomLeftRadius="0"
                borderTopRightRadius="0"
                fontSize="sm"
              >
                Lire la suite
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
