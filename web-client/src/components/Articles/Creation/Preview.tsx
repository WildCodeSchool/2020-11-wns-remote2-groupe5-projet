import React, { Dispatch, SetStateAction } from 'react';
import { Heading, Text, Image, Link, Flex, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ArrowRightIcon } from '@chakra-ui/icons';

type ContentFieldsProps = {
  contentFields: {
    contentType: string;
    value: string;
    file?: File | null | undefined;
  }[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Preview({
  contentFields,
  setIsOpen,
}: ContentFieldsProps): JSX.Element {
  return (
    <Box
      w={['100%', '100%', '45%', '45%']}
      p={[
        '25px 15px 40px 15px',
        '25px 20px 40px 20px',
        '25px 60px 40px 60px',
        '25px 60px 40px 60px',
      ]}
      borderTopRightRadius="20px"
      borderBottomRightRadius="20px"
      backgroundColor="#fff"
      marginRight="10px"
      overflowY="auto"
      boxShadow="1px 2px 22px -1px rgba(0,0,0,0.53)"
    >
      <Box width="100%" textAlign="right" marginBottom="20px">
        <ArrowRightIcon
          fontSize="35px"
          color="gray.600"
          cursor="pointer"
          _hover={{ color: 'gray.400' }}
          onClick={() => setIsOpen(false)}
        />
      </Box>
      <Flex direction="column">
        {contentFields.map((contentField, index) => {
          switch (contentField.contentType) {
            case 'Titre':
              return (
                <Heading
                  size="xl"
                  textAlign="center"
                  marginBottom="40px"
                  key={index}
                >
                  {contentField.value}
                </Heading>
              );

            case 'Sous-titre':
              return (
                <Heading size="md" marginBottom="20px" key={index}>
                  {contentField.value}
                </Heading>
              );

            case 'Paragraphe':
              return (
                <Text textAlign="justify" marginBottom="20px" key={index}>
                  {contentField.value}
                </Text>
              );

            case 'Lien':
              return (
                <Link
                  marginBottom="20px"
                  href={contentField.value}
                  isExternal
                  key={index}
                >
                  {contentField.value}
                  <ExternalLinkIcon mx="2px" />
                </Link>
              );

            case 'Image':
              return (
                contentField.file && (
                  <Box marginBottom="20px" width="65%" alignSelf="center">
                    <Image
                      src={URL.createObjectURL(contentField.file)}
                      alt=""
                      key={index}
                    />
                  </Box>
                )
              );
            default:
              return <></>;
          }
        })}
      </Flex>
    </Box>
  );
}
