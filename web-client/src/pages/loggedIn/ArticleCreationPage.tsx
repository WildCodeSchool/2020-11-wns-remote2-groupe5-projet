import React, { useEffect, useReducer, useState, Fragment } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Box, Flex, useDisclosure, Text } from '@chakra-ui/react';
import Lien from '../../components/Articles/Creation/ContentFields/Lien';
import Paragraphe from '../../components/Articles/Creation/ContentFields/Paragraphe';
import SousTitre from '../../components/Articles/Creation/ContentFields/Sous-titre';
import Titre from '../../components/Articles/Creation/ContentFields/Titre';
import EditionTools from '../../components/Articles/Creation/EditionTools';
import PublishModal from '../../components/Articles/Creation/PublishModal';
import { useArticlePublication } from '../../customhooks/useArticlePublication';
import fieldsReducer from '../../reducers/fieldsReducer';
import Image from '../.././components/Articles/Creation/ContentFields/Image';
import useGetCurrentWindowWidth from '../../customhooks/useGetCurrentWindowWidth';
import Preview from '../../components/Articles/Creation/Preview';
import { FaEye, FaTools } from 'react-icons/fa';
import ToggleSection from '../../components/Articles/Creation/ToggleSection';

export default function ArticleCreationPage(): JSX.Element {
  const [fields, dispatch] = useReducer(fieldsReducer, [
    { contentType: 'Titre', value: '' },
  ]);

  const [previewIsOpen, setPreviewIsOpen] = useState(false);
  const [toolsIsOpen, setToolsIsOpen] = useState(true);

  const [
    hiddenFieldsOnMobileAndPreviewOpen,
    setHiddenFieldsOnMobileAndPreviewOpen,
  ] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { windowSize } = useGetCurrentWindowWidth();

  useEffect(() => {
    if (windowSize.width < 700 && previewIsOpen) {
      setHiddenFieldsOnMobileAndPreviewOpen(true);
    } else {
      setHiddenFieldsOnMobileAndPreviewOpen(false);
    }
  }, [windowSize, previewIsOpen]);

  const { postArticle, defaultDescription } = useArticlePublication(fields);

  return (
    <Flex height="100%">
      <PublishModal
        isOpen={isOpen}
        onClose={onClose}
        title={fields[0].value}
        description={defaultDescription()}
        setPublishModal={onOpen}
        postArticle={postArticle}
      />
      {!hiddenFieldsOnMobileAndPreviewOpen && (
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
          <Box
            w={['90%', '90%', '45%', '45%']}
            overflowY="auto"
            marginLeft="auto"
            marginRight="auto"
          >
            <Titre index={0} value={fields[0].value} dispatch={dispatch} />
            <Droppable droppableId={'1'}>
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  my="16px"
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
                        return <Paragraphe {...props} key={index} />;
                      case 'Image':
                        return (
                          <Fragment key={index}>
                            <Image {...props} file={field.file} />
                          </Fragment>
                        );
                      case 'Lien':
                        return <Lien {...props} key={index} />;
                      case 'Sous-titre':
                        return <SousTitre {...props} key={index} />;
                      default:
                        return <Fragment key={index}></Fragment>;
                    }
                  })}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Box>
        </DragDropContext>
      )}
      {!hiddenFieldsOnMobileAndPreviewOpen && (
        <>
          {' '}
          {toolsIsOpen ? (
            <EditionTools
              dispatch={dispatch}
              openPublishModal={onOpen}
              setIsOpen={setToolsIsOpen}
            />
          ) : (
            <ToggleSection
              setIsOpen={setToolsIsOpen}
              isOpen={toolsIsOpen}
              title={'Outils'}
              Icon={FaTools}
            />
          )}
        </>
      )}

      {previewIsOpen ? (
        <Preview contentFields={fields} setIsOpen={setPreviewIsOpen} />
      ) : (
        <ToggleSection
          setIsOpen={setPreviewIsOpen}
          isOpen={previewIsOpen}
          title={'Aperçu'}
          Icon={FaEye}
        />
      )}
    </Flex>
  );
}
