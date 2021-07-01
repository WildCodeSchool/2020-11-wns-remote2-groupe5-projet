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
      value={value}
      dispatch={dispatch}
      children={<>
      <input
        onChange={(e) =>
          dispatch({
            type: 'SET_VALUE',
            payload: { index, value: e.target.value },
          })
        }
        value={value}
        placeholder="Ecrivez un sous-titre"
      />
      </>} />
  );
}
