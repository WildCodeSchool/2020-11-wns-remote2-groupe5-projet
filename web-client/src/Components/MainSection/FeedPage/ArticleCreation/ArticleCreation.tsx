import React, { useReducer } from 'react';
import ContentField from './ContentField';
import EditionTools from './EditionTools';
import './ArticleCreation.css';
import fieldsReducer from './fieldsReducer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function ArticleCreation(): JSX.Element {
  const [fields, dispatch] = useReducer(fieldsReducer, [
    { contentType: 'Titre', value: 'This is a test' },
  ]);

  return (
    <div className="flex justify-center">
      <DragDropContext
        onDragEnd={(e) =>
          dispatch({
            type: 'DRAG_DROP',
            payload: {
              index: Number(e.draggableId),
              newIndex: e.destination?.index,
            },
          })
        }
      >
        <Droppable droppableId={'1'}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="container flex flex-col w-2/3"
            >
              {fields.map((field, index) => (
                <ContentField
                  key={index}
                  contentType={field.contentType}
                  index={index}
                  isFirst={index === 1}
                  isLast={index === fields.length - 1}
                  value={field.value}
                  dispatch={dispatch}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <EditionTools dispatch={dispatch} />
    </div>
  );
}
