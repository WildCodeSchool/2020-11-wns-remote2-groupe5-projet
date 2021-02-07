import React from 'react';
import { Action } from '../fieldsReducer';

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
    <section className="flex flex-col m-4">
      <div className="bg-gray-800 rounded-t-md">
        <div className="flex items-center justify-between text-white py-2 px-4">
          <span>Titre</span>
        </div>
      </div>
      <input
        onChange={(e) =>
          dispatch({
            type: 'SET_VALUE',
            payload: { index, value: e.target.value },
          })
        }
        value={value}
        className="rounded-b-md h-10 py-2 px-4"
      />
    </section>
  );
}
