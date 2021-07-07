import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import { FiPlusCircle, FiSend } from 'react-icons/fi';
import { Action, ContentType } from '../../../reducers/fieldsReducer';
import { ArrowRightIcon } from '@chakra-ui/icons';

type EdtitionToolsProps = {
  dispatch: React.Dispatch<Action>;
  openPublishModal: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function EditionTools({
  dispatch,
  openPublishModal,
  setIsOpen,
}: EdtitionToolsProps): JSX.Element {
  const contentTypes: ContentType[] = [
    'Sous-titre',
    'Paragraphe',
    'Lien',
    'Image',
  ];

  return (
    <Flex
      height="100%"
      flexDir="column"
      backgroundColor="gray.800"
      textColor="gray.200"
      fontSize={{ base: 'md', sm: 'l', md: 'xl', lg: '2xl', xl: '2xl' }}
      borderRight="solid 1px #B6B6B6"
      boxShadow="1px 2px 15px -1px rgba(0,0,0,0.66)"
    >
      {contentTypes.map((contentType, index) => {
        return (
          <Box key={index}>
            <Flex
              alignItems="center"
              justify="start"
              _hover={{ color: 'gray.400' }}
              cursor="pointer"
              ml="8px"
              p="8px"
              onClick={() => {
                dispatch({ type: 'ADD', payload: { contentType } });
              }}
            >
              <FiPlusCircle />
              <Text pl="8px">{contentType}</Text>
            </Flex>
            <Divider />
          </Box>
        );
      })}

      <Box>
        <Flex
          alignItems="center"
          justify="start"
          _hover={{ color: 'gray.400' }}
          cursor="pointer"
          ml="8px"
          p="8px"
          onClick={() => openPublishModal()}
        >
          <FiSend />
          <Text pl="8px">Publier</Text>
        </Flex>
        <Divider />
      </Box>
      <ArrowRightIcon
        marginTop="auto"
        marginBottom="20%"
        alignSelf="center"
        cursor="pointer"
        _hover={{ color: 'gray.400' }}
        onClick={() => setIsOpen(false)}
      />
    </Flex>
  );
}
