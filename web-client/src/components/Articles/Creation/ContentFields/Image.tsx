import React from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import ContentFieldContainer from './ContentFieldContainer';

type ImageProps = {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  value: string;
  dispatch: React.Dispatch<Action>;
};

export default function Image({
  index,
  isFirst,
  isLast,
  value,
  dispatch,
}: ImageProps): JSX.Element {
  return (
    <ContentFieldContainer
      index={index}
      name="Image"
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
            placeholder="Selectionnez une image"
          />
      </>} />
  );
}
