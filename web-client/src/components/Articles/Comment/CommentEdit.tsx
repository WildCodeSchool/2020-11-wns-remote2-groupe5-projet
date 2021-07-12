/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { CREATE_COMMENT } from '../../../queries/article-queries';
import {
  Box,
  Flex,
  Text,
  Textarea,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import AvatarCustom from '../../helpers/AvatarCustom';

type CommentEditProps = {
  articleID: string;
};

const CommentEdit: React.FC<CommentEditProps> = ({
  articleID,
}): JSX.Element => {
  const { currentUser } = useContext(CurrentUserContext);

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
    <Flex
      minWidth="220px"
      // w={{
      //   base: '298px',
      //   sm: '300px',
      //   md: '350px',
      //   lg: '380px',
      //   xl: '380px',
      // }}
      w="100%"
      my="12px"
      alignSelf="flex-end"
      justifyContent="flex-end"
      //alignItems="flex-start"
    >
      <AvatarCustom variant="medium" avatar={currentUser?.avatarFileName!} />
      <Flex
        justify="space-between"
        alignItems="center"
        borderWidth={1}
        borderColor="#FFF"
        borderTopRadius="lg"
        borderBottomLeftRadius="lg"
        bgColor="gray.800"
        ml="8px"
      >
        <Textarea
          color="#FFF"
          w={{
            base: '270px',
            sm: '300px',
            md: '350px',
            lg: '380px',
            xl: '380px',
          }}
          borderWidth={0}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Votre commentaire..."
          _focus={{ borderColor: '#FFF' }}
          isFullWidth
        />
        <IconButton
          color="#FFF"
          type="submit"
          p={0}
          size="md"
          variant="outlined"
          aria-label="like"
          onClick={submit}
          icon={<FiSend />}
          disabled={comment === '' ? true : false}
        />
      </Flex>
      {/* </Flex> */}
    </Flex>
  );
};

export default CommentEdit;
