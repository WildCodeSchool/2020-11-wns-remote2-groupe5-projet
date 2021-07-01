import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Textarea } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from "@chakra-ui/react"
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

 
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent w="100%">
          <ModalHeader>Aperçu de {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Textarea
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
            size="sm"
          />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setPublishModal}>
              Close
            </Button>
            <Button variant="ghost" onClick={() => postArticle(descriptionValue)}>Published</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
}
