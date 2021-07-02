import React, { useEffect, useRef, useState } from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import { Draggable } from 'react-beautiful-dnd';

type ImageProps = {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  file: File | null | undefined;
  dispatch: React.Dispatch<Action>;
};

export default function Image({
  index,
  isFirst,
  isLast,
  file,
  dispatch,
}: ImageProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file && inputRef.current) {
      let list = new DataTransfer();
      let fileCopy = new File([file], file.name);

      list.items.add(fileCopy);
      let fileList = list.files;

      inputRef.current.files = fileList;
    } else if (inputRef.current) {
      inputRef.current.files = new DataTransfer().files;
    }
  }, [file]);

  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <section
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="flex flex-col m-4 bg-white rounded"
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
            onChange={() =>
              dispatch({
                type: 'SET_FILE',
                payload: {
                  index,
                  file: inputRef.current?.files
                    ? inputRef.current.files[0]
                    : null,
                },
              })
            }
            placeholder="Selectionnez une image"
            id="file"
            type="file"
            ref={inputRef}
            accept="image/*"
            className="rounded-b-md h-10 py-2 px-4"
          />
        </section>
      )}
    </Draggable>
  );
}
