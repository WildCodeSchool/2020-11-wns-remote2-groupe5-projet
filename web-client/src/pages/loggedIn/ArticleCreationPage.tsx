import React, { useEffect, useReducer, useState, Fragment } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Box, Flex } from '@chakra-ui/react';
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
  const [previewFadeInClass, setPreviewFadeInClass] = useState('');

  const openToolsWithTranslate = () => {
    setToolsIsOpen(true);
  };

  const openPreviewWithTranslate = () => {
    setPreviewFadeInClass('preview-slidein');
    setPreviewIsOpen(true);
    setTimeout(() => {
      setPreviewFadeInClass('');
    }, 500);
  };

  const closePreviewWithTranslate = () => {
    setPreviewFadeInClass('preview-slideout');
    setTimeout(() => {
      setPreviewIsOpen(false);
    }, 300);
  };

  const [
    hiddenFieldsOnMobileAndPreviewOpen,
    setHiddenFieldsOnMobileAndPreviewOpen,
  ] = useState(false);

  const { windowSize } = useGetCurrentWindowWidth();

  useEffect(() => {
    if (windowSize.width < 900 && previewIsOpen) {
      setHiddenFieldsOnMobileAndPreviewOpen(true);
    } else {
      setHiddenFieldsOnMobileAndPreviewOpen(false);
    }
  }, [windowSize, previewIsOpen]);

  const {
    postArticle,
    defaultDescription,
    modalIsOpen,
    modalOnClose,
    modalOnOpen,
    openPublishModal,
  } = useArticlePublication(fields);

  return (
    <Flex height="100%" width="100%">
      <PublishModal
        isOpen={modalIsOpen}
        onClose={modalOnClose}
        title={fields[0].value}
        description={defaultDescription()}
        setPublishModal={modalOnOpen}
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
            overflowY="auto"
            width="50%"
            paddingLeft={['0%', '2%', '8%', '9%']}
            paddingRight={['0%', '2%', '8%', '9%']}
            flexGrow={1}
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
      <Flex className={previewFadeInClass}>
        {!hiddenFieldsOnMobileAndPreviewOpen && (
          <>
            {toolsIsOpen ? (
              <EditionTools
                dispatch={dispatch}
                openPublishModal={openPublishModal}
                setIsOpen={setToolsIsOpen}
              />
            ) : (
              <ToggleSection
                setIsOpen={openToolsWithTranslate}
                isOpen={toolsIsOpen}
                title={'Outils'}
                Icon={FaTools}
              />
            )}
          </>
        )}

        {previewIsOpen ? (
          <Preview contentFields={fields} close={closePreviewWithTranslate} />
        ) : (
          <ToggleSection
            setIsOpen={openPreviewWithTranslate}
            isOpen={previewIsOpen}
            title={'Aperçu'}
            Icon={FaEye}
          />
        )}
      </Flex>
    </Flex>
  );
}
