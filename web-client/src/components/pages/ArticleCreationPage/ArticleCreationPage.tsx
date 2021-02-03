import React, { useReducer } from 'react';
import ContentField from './ContentField';
import EditionTools from './EditionTools';
import fieldsReducer from './fieldsReducer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useMutation } from '@apollo/client';
import { PUBLISH_ARTICLE } from '../../../queries/article-queries';

export default function ArticleCreationPage(): JSX.Element {
  const [fields, dispatch] = useReducer(fieldsReducer, [
    { contentType: 'Titre', value: 'This is a test' },
  ]);

  const [usePostArticle] = useMutation(PUBLISH_ARTICLE);
  const postArticle = async () => {
    try {
      if (fields.length < 2) {
        throw new Error();
      }

      const description =
        fields.filter((field) => {
          return field.contentType === 'Paragraphe';
        })[0].value || '';

      await usePostArticle({
        variables: {
          data: { date: new Date(), title: fields[0].value, description },
          fields: fields.map((field, index) => ({
            contentType: field.contentType,
            content: field.value,
            placeNumber: index,
          })),
        },
      });
      alert('Article posté :)');
    } catch (error) {
      console.log(error);
      alert('Erreur => go voir la console');
    }
  };

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
      <EditionTools dispatch={dispatch} postArticle={postArticle} />
    </div>
  );
}
