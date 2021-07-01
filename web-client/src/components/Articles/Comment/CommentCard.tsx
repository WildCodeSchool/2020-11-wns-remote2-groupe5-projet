import React from 'react';
import { parseDateComment } from '../../../utils/Date';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type CommentCardProps = {
  pseudo: string;
  date: string;
  avatarFileName: string | null;
  content: string;
};
export default function CommentCard({
  pseudo,
  date,
  avatarFileName,
  content,
}: CommentCardProps): JSX.Element {
  return (
    <Box w={["100%","100%","100%","320px"]} mb="12px">
      <Flex
        justify="space-between"
        align="center"
        borderTopRightRadius={'xl'}
        bgColor="gray.800"
        px={'8px'}
        py={'4px'}
      >
        <Flex>
          <Avatar name={pseudo} size="xs" src={"public/media/avatars/" + avatarFileName} alt="avatar" />
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
