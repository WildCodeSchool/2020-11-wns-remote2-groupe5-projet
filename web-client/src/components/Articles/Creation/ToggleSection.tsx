import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons';

type ToggleSectionProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  title: string;
  Icon: IconType;
};

export default function ToggleSection({
  setIsOpen,
  isOpen,
  title,
  Icon,
}: ToggleSectionProps): JSX.Element {
  return (
    <Flex
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      width="40px"
      className="toggle-preview-creation"
      cursor="pointer"
      backgroundColor="gray.800"
      textColor="gray.200"
      _hover={{ color: 'gray.400' }}
      onClick={() => setIsOpen(!isOpen)}
      title={title}
      borderRight={title === 'Outils' ? 'solid 1px #B6B6B6' : ''}
      boxShadow={title === 'Outils' ? '1px 2px 22px -1px rgba(0,0,0,0.53)' : ''}
    >
      <ArrowLeftIcon />
      <Text fontSize={title === 'Outils' ? '2xl' : '3xl'}>
        <Icon />
      </Text>
      <ArrowLeftIcon />
    </Flex>
  );
}
