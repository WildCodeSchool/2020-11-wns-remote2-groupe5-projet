import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { FiPlusCircle, FiSend } from 'react-icons/fi';
import { Action, ContentType } from '../../../reducers/fieldsReducer';
import { ArrowRightIcon } from '@chakra-ui/icons';
import '../../../styles/translatePanels.css';

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

  const [slideOutClass, setSlideOutClass] = useState('tools-slidein');
  const [fadeOutClass, setFadeoutClass] = useState('tools-slidein');

  const waitTranslateToClose = () => {
    setSlideOutClass('tools-slideout');
    setFadeoutClass('tools-fadeout');
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <Flex
      height="100%"
      flexDir="column"
      backgroundColor="gray.800"
      textColor="gray.200"
      fontSize={{ base: 'md', sm: 'l', md: 'xl', lg: '2xl', xl: '2xl' }}
      boxShadow="1px 2px 15px -1px rgba(0,0,0,0.66)"
      className={slideOutClass}
      alignSelf="flex-end"
      width={['140px', '150px', '200px', '200px']}
    >
      {contentTypes.map((contentType, index) => {
        return (
          <Box key={index} className={fadeOutClass}>
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

      <Box className={fadeOutClass}>
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
      <Box marginTop="auto" marginBottom="20%" alignSelf="center">
        <ArrowRightIcon
          cursor="pointer"
          _hover={{ color: 'gray.400' }}
          onClick={waitTranslateToClose}
        />
      </Box>
    </Flex>
  );
}
