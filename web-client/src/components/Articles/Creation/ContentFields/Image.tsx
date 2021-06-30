import React from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import { Draggable } from 'react-beautiful-dnd';

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
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <section
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="flex flex-col m-4"
        >
          <div className="bg-gray-800 rounded-t-md">
            <div className="flex items-center justify-between text-white py-2 px-4">
              <span>Image</span>
              <div className="flex">
                {!isFirst && (
                  <i
                    className="fas fa-chevron-up mx-2 cursor-pointer"
                    onClick={() =>
                      dispatch({ type: 'MOVE_UP', payload: { index } })
                    }
                  ></i>
                )}
                {!isLast && (
                  <i
                    className="fas fa-chevron-down mx-2 cursor-pointer"
                    onClick={() =>
                      dispatch({ type: 'MOVE_DOWN', payload: { index } })
                    }
                  ></i>
                )}

                <i
                  className="far fa-trash-alt cursor-pointer ml-3"
                  onClick={() => {
                    dispatch({ type: 'REMOVE', payload: { index } });
                  }}
                ></i>
              </div>
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
            placeholder="Selectionnez une image"
            className="rounded-b-md h-10 py-2 px-4"
          />
        </section>
      )}
    </Draggable>
  );
}
