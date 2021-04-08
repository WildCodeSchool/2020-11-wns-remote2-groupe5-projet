import React from 'react';
import { Box, Text, Image, Link } from '@chakra-ui/react';
import { OneArticle_oneArticle_contentFields } from '../../../schemaTypes';

type ContentFieldsProps = {
  contentFields: OneArticle_oneArticle_contentFields[];
};

export default function ContentFields({
  contentFields,
}: ContentFieldsProps): JSX.Element {
  return (
    <Box className="bg-red">
      {contentFields.map(
        (contentField: OneArticle_oneArticle_contentFields) => {
          switch (contentField.contentType) {
            case 'Titre':
              return (
                <Text textAlign="center" fontSize="4xl" fontWeight="900">
                  {contentField.content}
                </Text>
              );

            case 'Sous-titre':
              return (
                <Text textAlign="center" fontSize="xl" fontWeight="600">
                  {contentField.content}
                </Text>
              );

            case 'Paragraphe':
              return <Text textAlign="center">{contentField.content}</Text>;

            case 'Lien':
              return (
                <Link href={contentField.content} isExternal>
                  Lien
                </Link>
              );

            case 'Image':
              return (
                <Image
                  src="https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png"
                  alt=""
                />
              );
          }
        }
      )}
    </Box>
  );
}
