import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

type ToggleSectionProps = {
  setIsOpen: () => void;
  isOpen: boolean;
  title: string;
  Icon: IconType;
};

export default function ToggleSection({
  setIsOpen,
  title,
  Icon,
}: ToggleSectionProps): JSX.Element {
  return (
    <Flex
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      width={['38px', '40px', '50px', '50px']}
      cursor="pointer"
      backgroundColor="gray.800"
      textColor="gray.200"
      _hover={{ color: 'gray.400' }}
      onClick={() => setIsOpen()}
      title={title}
      borderLeft={title === 'Aperçu' ? 'solid 1px #B6B6B6' : ''}
      boxShadow={title === 'Outils' ? '1px 2px 22px -1px rgba(0,0,0,0.53)' : ''}
      zIndex="3"
      className="shake-on-hover"
    >
      <ArrowLeftIcon className="shake-on-hover-child" />
      <Text fontSize={title === 'Outils' ? '2xl' : '3xl'}>
        <Icon />
      </Text>
      <ArrowLeftIcon className="shake-on-hover-child" />
    </Flex>
  );
}
