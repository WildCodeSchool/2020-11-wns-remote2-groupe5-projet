import React, { useContext } from 'react';
import { parseRelativeTime } from '../../../utils/Date';
import { Box, Flex, Text } from '@chakra-ui/react';
import AvatarCustom from '../../helpers/AvatarCustom';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

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
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Box
      w={['100%', '100%', '100%', '320px']}
      mb="12px"
      // borderWidth={2}
      // borderColor="#FFF"
      // borderTopLeftRadius={pseudo === currentUser?.pseudo ? 'lg' : '0'}
      // borderTopRightRadius="lg"
      // borderBottomLeftRadius="lg"
      // borderBottomRightRadius={pseudo === currentUser?.pseudo ? '0' : 'lg'}
    >
      <Flex
        justify="space-between"
        align="center"
        borderTopLeftRadius={pseudo === currentUser?.pseudo ? 'lg' : '0'}
        borderTopRightRadius="lg"
        bgColor="gray.800"
        px="8px"
        py="8px"
      >
        <Flex>
          <AvatarCustom variant="small" avatar={avatarFileName} />
          <Text pl="4px" fontSize="md" fontWeight={600} color="white">
            {pseudo}
          </Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text fontSize="xs" color="white">
            {parseRelativeTime(date)}
          </Text>
        </Flex>
      </Flex>
      <Box
        bgColor="#FFF"
        borderBottomLeftRadius="lg"
        borderBottomRightRadius={pseudo === currentUser?.pseudo ? '0' : 'lg'}
        pl="8px"
        py="6px"
      >
        <Text>{content}</Text>
      </Box>
    </Box>
  );
}
