import React, { useReducer } from 'react';
import EditionTools from './EditionTools';
import fieldsReducer from './fieldsReducer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useMutation } from '@apollo/client';
import { PUBLISH_ARTICLE } from '../../../queries/article-queries';
import Paragraphe from './ContentFields/Paragraphe';
import Image from './ContentFields/Image';
import Lien from './ContentFields/Lien';
import SousTitre from './ContentFields/Sous-titre';
import Titre from './ContentFields/Titre';

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
        <div className="container flex flex-col w-2/3">
          <Titre index={0} value={fields[0].value} dispatch={dispatch} />
          <Droppable droppableId={'1'}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="container flex flex-col"
              >
                {fields.map((field, index) => {
                  const props = {
                    key: index,
                    index,
                    isFirst: index === 1,
                    isLast: index === fields.length - 1,
                    value: field.value,
                    dispatch,
                  };
                  switch (field.contentType) {
                    case 'Paragraphe':
                      return <Paragraphe {...props} />;
                    case 'Image':
                      return <Image {...props} />;
                    case 'Lien':
                      return <Lien {...props} />;
                    case 'Sous-titre':
                      return <SousTitre {...props} />;
                  }
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <EditionTools dispatch={dispatch} postArticle={postArticle} />
    </div>
  );
}
