import React from 'react';
import { Box, Text, Image, Link } from '@chakra-ui/react';
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
    <Box>
      {contentFields.map(
        (contentField: OneArticle_oneArticle_contentFields, i) => {
          switch (contentField.contentType) {
            case 'Titre':
              return (
                <Text
                  key={i}
                  textAlign="center"
                  fontSize="4xl"
                  fontWeight="900"
                >
                  {contentField.content}
                </Text>
              );

            case 'Sous-titre':
              return (
                <Text key={i} textAlign="center" fontSize="xl" fontWeight="600">
                  {contentField.content}
                </Text>
              );

            case 'Paragraphe':
              return (
                <Text key={i} textAlign="center">
                  {contentField.content}
                </Text>
              );

            case 'Lien':
              return (
                <Link key={i} href={contentField.content} isExternal>
                  Lien
                </Link>
              );

            case 'Image':
              return (
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
              );
          }
        }
      )}
    </Box>
  );
}
