import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_DIPLOMAS } from '../../../queries/editProfil-queries';
import { Box, useToast } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Checkbox, Input, Radio, Textarea, Text } from '@chakra-ui/react';
import InputCustom from '../../helpers/InputCustom';

export default function EditDegree(): JSX.Element {
  const [diplomaName, setDiplomaName] = useState('');
  const [school, setSchool] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [description, setDescription] = useState('');
  const [isActualSchool, setIsActualSchool] = useState(false);

  const toast = useToast();

  const [createDiplomas] = useMutation(CREATE_DIPLOMAS);

  const postDiplomas = async () => {
    try {
      await createDiplomas({
        variables: {
          experiences: [
            {
              diplomaName,
              school,
              dateStart,
              dateEnd,
              isActualSchool,
              description,
            },
          ],
        },
      });
      toast({
        description: 'Profil mis à jour! :)',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log('ERROR', error);
      toast({
        title: 'Erreur',
        description:
          "Une erreur s'est produite lors de la mise à jour de votre profil!",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex p={4} flexDirection="column" alignContent="flex-start">
      <InputCustom
        type="text"
        placeholder="Intitulé du Diplôme"
        value={diplomaName}
        setValue={(e) => setDiplomaName(e.target.value)}
      />
      <InputCustom
        type="text"
        placeholder="Ecole"
        value={school}
        setValue={(e) => setSchool(e.target.value)}
      />
      <Flex w="100%" alignItems="center">
        <Text color="#FFF" pr="16px">
          De
        </Text>
        <InputCustom
          type="date"
          placeholder="Date de début"
          value={dateStart}
          setValue={(e) => setDateStart(e.target.value)}
          textColor="#FFF"
        />
      </Flex>
      <Flex w="100%" alignItems="center">
        <Text color="#FFF" pr="16px">
          À
        </Text>
        <InputCustom
          type="date"
          placeholder="Date de début"
          value={dateStart}
          setValue={(e) => setDateEnd(e.target.value)}
          textColor="#FFF"
        />
      </Flex>
      <Box my="16px">
        <Checkbox
          colorScheme="#fff"
          name="Ecole actuel"
          onClick={() => setIsActualSchool(!isActualSchool)}
          display="flex"
          color="#fff"
        >
          École actuelle
        </Checkbox>
      </Box>
      <InputCustom
        type="text"
        placeholder="Description"
        value={description}
        setValue={(e) => setDescription(e.target.value)}
        textColor="#FFF"
      />
      <Button
        marginTop="20px"
        alignSelf="center"
        width="100px"
        color="#FFF"
        variant="outline"
        onClick={() => postDiplomas()}
        backgroundColor="gray.800"
        _checked={{ backgroundColor: 'gray.800' }}
        _focus={{ backgroundColor: 'gray.800' }}
        _hover={{ backgroundColor: 'gray.800' }}
      >
        Enregistrer
      </Button>
    </Flex>
  );
}
