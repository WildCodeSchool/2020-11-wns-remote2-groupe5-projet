import React from 'react';
import { ReactComponent as IconTrash } from '../../../assets/icons/icon_trash.svg';
import { ReactComponent as IconArrow } from '../../../assets/icons/icon_simple_arrow_up.svg';
import { Action, ContentType } from './fieldsReducer';
import { Draggable } from 'react-beautiful-dnd';

type ContentFieldProps = {
  contentType: ContentType;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  value: string;
  dispatch: React.Dispatch<Action>;
};

export default function ContentField({
  contentType,
  index,
  isFirst,
  isLast,
  value,
  dispatch,
}: ContentFieldProps): JSX.Element {
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
              <span>{contentType}</span>
              {contentType !== 'Titre' && (
                <div className="flex">
                  {!isFirst && (
                    <IconArrow
                      onClick={() =>
                        dispatch({ type: 'MOVE_UP', payload: { index } })
                      }
                      className="w-6 h-6"
                    />
                  )}
                  {!isLast && (
                    <IconArrow
                      onClick={() =>
                        dispatch({ type: 'MOVE_DOWN', payload: { index } })
                      }
                      className="w-6 h-6 transform rotate-180"
                    />
                  )}
                  <IconTrash
                    onClick={() => {
                      dispatch({ type: 'REMOVE', payload: { index } });
                    }}
                    className="w-6 h-6"
                  />
                </div>
              )}
            </div>
          </div>
          {contentType === 'Paragraphe' ? (
            <textarea
              onChange={(e) =>
                dispatch({
                  type: 'SET_VALUE',
                  payload: { index, value: e.target.value },
                })
              }
              value={value}
              className="resize-y rounded-b-md py-2 px-4"
            />
          ) : (
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
          )}
        </section>
      )}
    </Draggable>
  );
}
