import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_DIPLOMAS } from '../../../../../../queries/editProfil-queries';
import { useToast } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Checkbox, Input, Radio, Textarea } from '@chakra-ui/react';

export default function DegreeModification(): JSX.Element {
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
          "Une erreur c'est produite lors de la mise à jour de votre profil!",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex p={4} flexDirection="column" alignContent="flex-start">
      <Input
        type="text"
        placeholder="Intitulé du Diplôme"
        focusBorderColor="#393E46"
        onChange={(e) => setDiplomaName(e.target.value)}
        marginY={5}
        borderColor="#8b9ab0"
        _hover={{ borderColor: '#424a57' }}
        backgroundColor="whiteAlpha.900"
      />
      <Input
        type="text"
        placeholder="Ecole"
        focusBorderColor="#393E46"
        onChange={(e) => setSchool(e.target.value)}
        marginY={5}
        borderColor="#8b9ab0"
        _hover={{ borderColor: '#424a57' }}
        backgroundColor="whiteAlpha.900"
      />
      <Flex
        flexDirection={{ lg: 'row', md: 'column', base: 'column' }}
        justifyContent="space-between"
        marginY={5}
      >
        <Input
          type="date"
          placeholder="Date de début"
          focusBorderColor="#393E46"
          onChange={(e) => setDateStart(e.target.value)}
          width={{ lg: '35%', md: '100%', base: '100%' }}
          borderColor="#8b9ab0"
          _hover={{ borderColor: '#424a57' }}
          backgroundColor="whiteAlpha.900"
        />
        <Input
          type="date"
          placeholder="Date de fin"
          focusBorderColor="#393E46"
          onChange={(e) => setDateEnd(e.target.value)}
          width={{ lg: '35%', md: '100%', base: '100%' }}
          borderColor="#8b9ab0"
          _hover={{ borderColor: '#424a57' }}
          backgroundColor="whiteAlpha.900"
        />
        <Checkbox
          colorScheme="blackAlpha"
          name="Ecole actuel"
          onClick={() => setIsActualSchool(!isActualSchool)}
          width="20%"
          display="flex"
          flexDirection="column-reverse"
          borderColor="#8b9ab0"
          _hover={{ borderColor: '#424a57' }}
        >
          Ecole actuelle
        </Checkbox>
      </Flex>
      <label color="black">
        Description
        <Textarea
          focusBorderColor="#393E46"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          borderColor="#8b9ab0"
          _hover={{ borderColor: '#424a57' }}
          backgroundColor="whiteAlpha.900"
        />
      </label>
      <Button
        marginTop="20px"
        alignSelf="center"
        width="100px"
        colorScheme="black"
        variant="outline"
        onClick={() => postDiplomas()}
        backgroundColor="whiteAlpha.900"
      >
        Enregistrer
      </Button>
    </Flex>
  );
}
