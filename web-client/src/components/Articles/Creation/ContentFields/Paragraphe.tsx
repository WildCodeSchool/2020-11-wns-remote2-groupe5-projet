import React from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import ContentFieldContainer from './ContentFieldContainer';

type ParagrapheProps = {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  value: string;
  dispatch: React.Dispatch<Action>;
};


export default function Paragraphe({
  index,
  isFirst,
  isLast,
  value,
  dispatch,
}: ParagrapheProps): JSX.Element {
  return (
    <ContentFieldContainer
      index={index}
      name="Paragraphe"
      isFirst={isFirst}
      isLast={isLast}
      value={value}
      dispatch={dispatch}
      children={<>
      <textarea
            onChange={(e) =>
              dispatch({
                type: 'SET_VALUE',
                payload: { index, value: e.target.value },
              })
            }
            value={value}
            placeholder="Ecrivez un paragraphe"
          />
      </>} />
  );
}
