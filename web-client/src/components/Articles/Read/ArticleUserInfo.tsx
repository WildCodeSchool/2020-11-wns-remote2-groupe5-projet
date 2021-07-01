/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { parseDateArticle } from '../../../utils/Date';

type ArticleUserInfoProps = {
  pseudo: string;
  avatar?: string;
  date: string;
};

const ArticleUserInfo: React.FC<ArticleUserInfoProps> = ({
  pseudo,
  avatar,
  date,
}) => {
  return (
    <Flex align="center" m={'4px'}>
      <Box m={'4px'}>
        <Avatar w={{base:"30px",sm:"34px",md:"45px",lg:"70px"}}  h={{base:"30px",sm:"34px",md:"45px",lg:"70px"}} name={pseudo} src="https://bit.ly/dan-abramov" />
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
