import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Textarea } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

type PublishModalProps = {
  isOpen: boolean;
  onClose: () => void
  title: string;
  description: string;
  setPublishModal: (value: boolean) => void;
  postArticle: (description: string) => Promise<void>;
};

export default function PublishModal({
  isOpen,
  onClose,
  title,
  description,
  setPublishModal,
  postArticle,
}: PublishModalProps): JSX.Element {
  const [descriptionValue, setDescriptionValue] = useState('');

  useEffect(() => {
    setDescriptionValue(description);
  }, [description]);

  const onSubmit = () => {
    postArticle(descriptionValue)
    onClose()
  }

 
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent w="90%" backgroundColor='800.gray'>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Textarea
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
            size="sm"
          />
          </ModalBody>
          <ModalFooter>
            <Button color='gray.100' backgroundColor="gray.800" mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button variant="ghost" onClick={onSubmit}>Publier</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
}
