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
            placeholder="Indiquez votre url"
          />
      </>} />
  );
}
