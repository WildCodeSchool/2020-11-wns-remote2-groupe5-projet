/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import GlobalContext from '../../../../utils/GlobalContext';
import InputCustom from '../../../common/helpers/InputCustom';
import { CREATE_COMMENT } from '../../../../queries/article-queries';
import { Box, Flex, Avatar, Text, Textarea, Button } from '@chakra-ui/react';
import { parseDateComment } from '../../../../utils/Date';
import { FiSend } from 'react-icons/fi';

type CommentEditProps = {
  articleID: string;
};

const CommentEdit: React.FC<CommentEditProps> = ({
  articleID,
}): JSX.Element => {
  const user = useContext(GlobalContext).user;
  const [comment, setComment] = useState('');
  const [createComment] = useMutation(CREATE_COMMENT);

  const submit = async () => {
    try {
      await createComment({
        variables: {
          articleID: articleID,
          date: new Date().toISOString(),
          commentaire: comment,
        },
      });
      setComment('');
    } catch (error) {
      console.log('an error occured', error);
    }
  };

  return (
    <Box w="320px" my="12px">
      <Flex
        justify="space-between"
        align="center"
        borderTopRadius={'xl'}
        bgColor="gray.800"
        px={'8px'}
        py={'4px'}
      >
        <Flex>
          <Avatar size="xs" src={user?.pseudo} alt="avatar" />
          <Text pl="4px" fontSize="md" fontWeight={600} color="white">
            {user?.pseudo}
          </Text>
        </Flex>
      </Flex>
      <Box className="flex items-center justify-between bg-white rounded-bl-lg p-5 break-words">
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Votre commentaire"
        />
        {comment === '' ? (
          <Button
            p={0}
            size="sm"
            variant="outlined"
            aria-label="like"
            onClick={submit}
            disabled
          >
            <FiSend />
          </Button>
        ) : (
          <Button
            p={0}
            size="md"
            variant="outlined"
            aria-label="like"
            onClick={submit}
          >
            <FiSend />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CommentEdit;
