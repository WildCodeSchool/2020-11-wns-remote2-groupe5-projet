import { Input } from '@chakra-ui/react';
import React from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import ContentFieldContainer from './ContentFieldContainer';

type SousTitreProps = {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  value: string;
  dispatch: React.Dispatch<Action>;
};

export default function SousTitre({
  index,
  isFirst,
  isLast,
  value,
  dispatch,
}: SousTitreProps): JSX.Element {
  return (
    <ContentFieldContainer
      index={index}
      name="Sous Titre"
      isFirst={isFirst}
      isLast={isLast}
      dispatch={dispatch}
      children={
        <>
          <Input
            placeholder="Ecrivez un sous-titre"
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
