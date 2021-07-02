import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import AvatarCustom from '../../helpers/AvatarCustom';

type ArticleUserInfoProps = {
  pseudo: string;
  avatarFileName: string | null;
};

const ArticleUserInfo: React.FC<ArticleUserInfoProps> = ({
  pseudo,
  avatarFileName,
}) => {

  return (
    <Flex align="center" m='4px' w='100%' justifyContent="start" >
      <Box m='4px'>
        <AvatarCustom
          variant="big"
          avatar={avatarFileName} 
        />
      </Box>
      <VStack spacing={0.5} m={'4px'}>
        <Flex flexDir="column">
          <Text fontSize="md" color="white">
            {pseudo ? pseudo : 'Username'}
          </Text>
          <Flex flexDir="column">
            <Text fontSize="md" fontWeight={900} pr={'4px'} color="white">
              #DEV
            </Text>
            <Text fontSize="md" color="white">
              #javascript
            </Text>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ArticleUserInfo;
