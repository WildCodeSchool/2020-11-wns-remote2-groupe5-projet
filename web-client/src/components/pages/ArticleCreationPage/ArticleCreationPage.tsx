import React, { useReducer } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useArticlePublication } from './useArticlePublication';
import fieldsReducer from './fieldsReducer';
import EditionTools from './EditionTools';
import Paragraphe from './ContentFields/Paragraphe';
import Image from './ContentFields/Image';
import Lien from './ContentFields/Lien';
import SousTitre from './ContentFields/Sous-titre';
import Titre from './ContentFields/Titre';
import PublishModal from './PublishModal';
import { Box, Flex } from '@chakra-ui/react';

export default function ArticleCreationPage(): JSX.Element {
  const [fields, dispatch] = useReducer(fieldsReducer, [
    { contentType: 'Titre', value: '' },
  ]);

  const {
    publishModal,
    setPublishModal,
    openPublishModal,
    postArticle,
    defaultDescription,
  } = useArticlePublication(fields);

  return (
    <Flex justify="center" w="100%">
      <PublishModal
        isOpen={publishModal}
        title={fields[0].value}
        description={defaultDescription()}
        setPublishModal={setPublishModal}
        postArticle={postArticle}
      />

      <EditionTools dispatch={dispatch} openPublishModal={openPublishModal} />
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
        <Box w="45%">
          <Titre index={0} value={fields[0].value} dispatch={dispatch} />
          <Droppable droppableId={'1'}>
            {(provided) => (
              <Box ref={provided.innerRef} {...provided.droppableProps}>
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
              </Box>
            )}
          </Droppable>
        </Box>
      </DragDropContext>
    </Flex>
  );
}
