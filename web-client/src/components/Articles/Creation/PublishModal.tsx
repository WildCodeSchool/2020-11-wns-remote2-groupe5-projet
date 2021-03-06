import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Text,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import SelectCommunity from '../../helpers/SelectCommunity';

type PublishModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  setPublishModal: (value: boolean) => void;
  postArticle: (description: string, community: string) => Promise<void>;
};

export default function PublishModal({
  isOpen,
  onClose,
  description,
  postArticle,
}: PublishModalProps): JSX.Element {
  const [descriptionValue, setDescriptionValue] = useState('');
  const [communityValue, setCommunityValue] = useState('');
  useEffect(() => {
    setDescriptionValue(description);
  }, [description]);

  const onSubmit = () => {
    postArticle(descriptionValue, communityValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent w="90%" backgroundColor="800.gray">
        <ModalHeader>Confirmation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <i>Description</i> :
          </Text>
          <Textarea
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
            marginBottom="16px"
          />
          <SelectCommunity onChange={setCommunityValue} background="white" />
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Annuler
          </Button>
          <Button
            color="gray.100"
            backgroundColor="gray.800"
            onClick={onSubmit}
          >
            Publier
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
