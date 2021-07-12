import React, { Fragment } from 'react';
import { Heading, Text, Image, Link, Flex, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ArrowRightIcon } from '@chakra-ui/icons';

type ContentFieldsProps = {
  contentFields: {
    contentType: string;
    value: string;
    file?: File | null | undefined;
  }[];
  close: () => void;
};

export default function Preview({
  contentFields,
  close,
}: ContentFieldsProps): JSX.Element {
  return (
    <Box
      w={['98vw', '98vw', '98vw', '40vw']}
      p={[
        '25px 15px 40px 15px',
        '25px 20px 40px 20px',
        '25px 60px 40px 60px',
        '25px 60px 40px 60px',
      ]}
      borderTopRightRadius="20px"
      borderBottomRightRadius="20px"
      backgroundColor="rgb(226 232 240);"
      marginRight="10px"
      overflowY="auto"
      boxShadow="1px 2px 22px -1px rgba(0,0,0,0.53)"
      zIndex="3"
    >
      <Box
        width="100%"
        textAlign="right"
        marginBottom="20px"
        className="shake-on-hover"
      >
        <ArrowRightIcon
          fontSize="35px"
          color="gray.600"
          cursor="pointer"
          _hover={{ color: 'gray.400' }}
          onClick={() => close()}
          className="shake-on-hover-child"
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
                  <Box
                    marginBottom="20px"
                    width={['100%', '100%', '70%', '70%']}
                    alignSelf="center"
                  >
                    <Image
                      src={URL.createObjectURL(contentField.file)}
                      alt=""
                      key={index}
                    />
                  </Box>
                )
              );
            default:
              return <Fragment key={index}></Fragment>;
          }
        })}
      </Flex>
    </Box>
  );
}
