/* eslint-disable array-callback-return */
import React, { useEffect, useReducer } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Lien from '../../components/Articles/Creation/ContentFields/Lien';
import Paragraphe from '../../components/Articles/Creation/ContentFields/Paragraphe';
import SousTitre from '../../components/Articles/Creation/ContentFields/Sous-titre';
import Titre from '../../components/Articles/Creation/ContentFields/Titre';
import EditionTools from '../../components/Articles/Creation/EditionTools';
import PublishModal from '../../components/Articles/Creation/PublishModal';
import { useArticlePublication } from '../../customhooks/useArticlePublication';
import fieldsReducer from '../../reducers/fieldsReducer';
import Image from '../.././components/Articles/Creation/ContentFields/Image';

export default function ArticleCreationPage(): JSX.Element {
  const [fields, dispatch] = useReducer(fieldsReducer, [
    { contentType: 'Titre', value: '' },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModal = () => {
    console.log('coucou');
    onOpen();
  };

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
        isOpen={isOpen}
        onClose={onClose}
        title={fields[0].value}
        description={defaultDescription()}
        setPublishModal={onOpen}
        postArticle={postArticle}
      />

      <EditionTools dispatch={dispatch} openPublishModal={handleModal} />
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
                      return <Image {...props} file={field.file} />;
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
