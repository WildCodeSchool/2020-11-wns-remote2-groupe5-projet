import React, { Fragment } from 'react';
import { Flex, Text, Image, Link, Heading, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { OneArticle_oneArticle_contentFields } from '../../../schemaTypes';

type ContentFieldsProps = {
  contentFields: OneArticle_oneArticle_contentFields[];
  articleId: string;
};

export default function ContentFields({
  contentFields,
  articleId,
}: ContentFieldsProps): JSX.Element {
  return (
    <Flex
      direction="column"
      p={[
        '25px 15px 40px 15px',
        '25px 15px 40px 15px',
        '45px 100px 60px 100px',
        '45px 100px 60px 100px',
      ]}
    >
      {contentFields.map(
        (contentField: OneArticle_oneArticle_contentFields, index) => {
          switch (contentField.contentType) {
            case 'Titre':
              return (
                <Heading
                  size="xl"
                  textAlign="center"
                  marginBottom="40px"
                  key={index}
                >
                  {contentField.content}
                </Heading>
              );

            case 'Sous-titre':
              return (
                <Heading size="md" marginBottom="20px" key={index}>
                  {contentField.content}
                </Heading>
              );

            case 'Paragraphe':
              return (
                <Text textAlign="justify" marginBottom="20px" key={index}>
                  {contentField.content}
                </Text>
              );

            case 'Lien':
              return (
                <Link
                  marginBottom="20px"
                  href={contentField.content}
                  isExternal
                  key={index}
                >
                  {contentField.content}
                  <ExternalLinkIcon mx="2px" />
                </Link>
              );

            case 'Image':
              return (
                <Box
                  marginBottom="20px"
                  width={['100%', '100%', '70%', '70%']}
                  alignSelf="center"
                  key={index}
                >
                  <Image
                    src={
                      contentField.content === null
                        ? undefined
                        : document.location.origin +
                          '/public/media/articles/' +
                          articleId +
                          '/' +
                          contentField.content
                    }
                    alt=""
                  />
                </Box>
              );
            default:
              return <Fragment key={index}></Fragment>;
          }
        }
      )}
    </Flex>
  );
}
