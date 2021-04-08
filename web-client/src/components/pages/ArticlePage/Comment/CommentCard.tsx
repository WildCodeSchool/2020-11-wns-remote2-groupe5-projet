import React from 'react';
import { parseDateComment } from '../../../../utils/Date';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type CommentCardProps = {
  pseudo: string;
  date: string;
  avatar?: string;
  content: string;
};
export default function CommentCard({
  pseudo,
  date,
  avatar,
  content,
}: CommentCardProps): JSX.Element {
  return (
    <Box w="320px" my="12px">
      <Flex
        justify="space-between"
        align="center"
        borderTopRightRadius={'xl'}
        bgColor="gray.800"
        px={'8px'}
        py={'4px'}
      >
        <Flex>
          <Avatar size="xs" src={avatar} alt="avatar" />
          <Text pl="4px" fontSize="md" fontWeight={600} color="white">
            {pseudo}
          </Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text fontSize="xs" color="white">
            {parseDateComment(date)}
          </Text>
        </Flex>
      </Flex>
      <Box bgColor="white" borderBottomRadius={'xl'} pl="8px" py="6px">
        <Text>{content}</Text>
      </Box>
    </Box>
  );
}
