import { Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { Action } from '../../../../reducers/fieldsReducer';

type TitreProps = {
  index: number;
  value: string;
  dispatch: React.Dispatch<Action>;
};

export default function Titre({
  index,
  value,
  dispatch,
}: TitreProps): JSX.Element {
  return (
    <Flex m="8px" flexDir="column" borderRadius="lg">
      <Flex
        p="8px"
        backgroundColor="gray.800"
        alignItems="center"
        justify="space-between"
        borderTopRadius="lg"
      >
        <Text color="#FFF">Titre</Text>
      </Flex>
      <Input
        placeholder="Ecrivez un titre"
        backgroundColor="#FFF"
        borderBottomRadius="lg"
        borderTopRadius="0"
        mb="8px"
        value={value}
        onChange={(e) =>
          dispatch({
            type: 'SET_VALUE',
            payload: { index, value: e.target.value },
          })
        }
      />
    </Flex>
  );
}
