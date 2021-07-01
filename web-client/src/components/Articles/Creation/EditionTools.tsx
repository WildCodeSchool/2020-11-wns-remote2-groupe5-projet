import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FiPlusCircle, FiSend } from "react-icons/fi";

import { FaEye } from "react-icons/fa";

import { Action, ContentType } from '../../../reducers/fieldsReducer';

type EdtitionToolsProps = {
  dispatch: React.Dispatch<Action>;
  openPublishModal: () => void;
};

export default function EditionTools({
  dispatch,
  openPublishModal,
}: EdtitionToolsProps): JSX.Element {

  const contentTypes: ContentType[] = [
    'Sous-titre',
    'Paragraphe',
    'Lien',
    'Image',
  ];

  return (
    <Box>
      <Flex 
        flexDir="column" 
        alignSelf="center" 
        backgroundColor="gray.800" 
        borderLeftRadius="xl" 
        textColor="gray.200"
        fontSize={{ base: "md", sm: "l", md: "xl", lg: "2xl", xl:"2xl" }}
      >
        {contentTypes.map((contentType, index) => {
          return (
            <Box key={index}>
              <Flex 
                alignItems="center"
                justify="start"
                _hover={{color: "gray.400"}}
                cursor="pointer"
                ml='8px'
                p='8px'
                onClick={() => {
                  dispatch({ type: 'ADD', payload: { contentType } });
                }}
               
              >
                <FiPlusCircle/>
                <Text pl='8px'>{contentType}</Text>
              </Flex>
                <Divider />
            </Box>
          );
        })}
            <Box>
              <Flex 
                alignItems="center"
                justify="start"
                _hover={{color: "gray.400"}}
                cursor="pointer"
                ml='8px'
                p='8px'
                onClick={() => console.log("aperçu")}
                fontSize={{ base: "md", sm: "l", md: "xl", lg: "2xl", xl:"2xl" }}
              >
                <FaEye />
                <Text pl='8px'>Aperçu</Text>
              </Flex>
                <Divider />
            </Box>
            <Box>
              <Flex 
                alignItems="center"
                justify="start"
                _hover={{color: "gray.400"}}
                cursor="pointer"
                ml='8px'
                p='8px'
                onClick={() => openPublishModal()}
              >
                <FiSend />
                <Text pl='8px'>Publier</Text>
              </Flex>
                <Divider />
            </Box>
      </Flex>
    </Box>
  );
}
