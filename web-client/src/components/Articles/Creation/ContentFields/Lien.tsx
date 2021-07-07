import { Input } from '@chakra-ui/react';
import React from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import ContentFieldContainer from './ContentFieldContainer';

type LienProps = {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  value: string;
  dispatch: React.Dispatch<Action>;
};

export default function Lien({
  index,
  isFirst,
  isLast,
  value,
  dispatch,
}: LienProps): JSX.Element {
  return (
    <ContentFieldContainer
      index={index}
      name="Lien"
      isFirst={isFirst}
      isLast={isLast}
      dispatch={dispatch}
      children={
        <>
          <Input
            placeholder="Indiquez votre url"
            backgroundColor="#FFF"
            borderBottomRadius="lg"
            borderTopRadius="0"
            onChange={(e) =>
              dispatch({
                type: 'SET_VALUE',
                payload: { index, value: e.target.value },
              })
            }
            value={value}
          />
        </>
      }
    />
  );
}
