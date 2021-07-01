import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { parseDateArticle } from '../../../utils/Date';
import AvatarCustom from '../../helpers/AvatarCustom';

type ArticleUserInfoProps = {
  pseudo: string;
  avatarFileName: string | null;
  date: string;
};



const ArticleUserInfo: React.FC<ArticleUserInfoProps> = ({
  pseudo,
  avatarFileName,
  date,
}) => {

  console.log("article", avatarFileName)

  return (
    <Flex align="center" m={'4px'} w={['100%']} justifyContent={["space-around","space-around","space-around","flex-start"]} >
      <Box m={'4px'}>
        <AvatarCustom
          variant="big"
          avatar={avatarFileName} 
        />
      </Box>
      <VStack spacing={0.5} m={'4px'}>
        <Flex>
          <Text pr={'8px'} fontSize="md" color="white">
            {pseudo}
          </Text>
          <Button variant="unstyled" size="xs" color="white">
            S&rsquo;abonner
          </Button>
        </Flex>
        <Flex flexDir="column" align="left">
          <Text fontSize="sm" color="white">
            {parseDateArticle(date)}
          </Text>
          <Flex>
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
