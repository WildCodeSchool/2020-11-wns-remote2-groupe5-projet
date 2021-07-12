import React, { useContext } from 'react';
import { parseRelativeTime } from '../../../utils/Date';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
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
    <Flex
      alignItems="start"
      justifyContent={
        pseudo === currentUser?.pseudo ? 'flex-end' : 'flex-start'
      }
      my="8px"
    >
      <AvatarCustom variant="medium" avatar={avatarFileName} />
      <Flex align="center" justify="space-between" flexDir="column" pl="8px">
        <Box
          minWidth="220px"
          w={{
            base: '290px',
            sm: '300px',
            md: '350px',
            lg: '380px',
            xl: '380px',
          }}
          borderWidth={1}
          borderColor="#FFF"
          borderTopLeftRadius={pseudo === currentUser?.pseudo ? 'lg' : '0'}
          borderTopRightRadius="lg"
          borderBottomLeftRadius="lg"
          borderBottomRightRadius={pseudo === currentUser?.pseudo ? '0' : 'lg'}
        >
          <Flex
            align="center"
            borderTopLeftRadius={pseudo === currentUser?.pseudo ? 'lg' : '0'}
            borderTopRightRadius="lg"
            borderBottomLeftRadius="lg"
            borderBottomRightRadius={
              pseudo === currentUser?.pseudo ? '0' : 'lg'
            }
            bgColor="gray.800"
            px="8px"
            py="8px"
          >
            <Flex alignItems="start">
              <Text
                noOfLines={20}
                fontFamily="mono"
                fontSize="md"
                color="gray.100"
              >
                <b
                  style={{
                    color: '#FFF',
                    paddingRight: '8px',
                    fontSize: '19px',
                    fontFamily: 'Quicksand',
                    fontWeight: 700,
                  }}
                >
                  {pseudo ? pseudo : 'Username'}
                </b>
                {content}
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Text
          fontSize="xs"
          color="gray.400"
          alignSelf="flex-end"
          pt="4px"
          pr="4px"
        >
          {parseRelativeTime(date)}
        </Text>
      </Flex>
    </Flex>
  );
}
