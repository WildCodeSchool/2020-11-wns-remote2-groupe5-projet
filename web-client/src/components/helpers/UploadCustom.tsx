import React from 'react';
import { Input, Flex, FormLabel, Text } from '@chakra-ui/react';
import { FiUpload } from 'react-icons/fi';

type UploadProps = {
  onChange: ({
    target: {
      validity,
      files: [file],
    },
  }: any) => Promise<void>;
};

export default function UploadCustom(props: UploadProps): JSX.Element {
  const { onChange } = props;

  return (
    <FormLabel htmlFor="file">
      <Flex
        minWidth="204"
        w="100%"
        h="40px"
        alignItems="center"
        justify="space-evenly"
        borderRadius="md"
        borderWidth={1}
        borderColor="#FFF"
        cursor="pointer"
      >
        <Input
          id="file"
          type="file"
          accept="image/*"
          onChange={onChange}
          hidden
        />
        <FiUpload size="17px" color="#FFF" />
        <Text color="#FFF">Importe un avatar</Text>
      </Flex>
    </FormLabel>
  );
}
