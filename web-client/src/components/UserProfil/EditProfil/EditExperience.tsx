import React, { useState } from 'react';
import InputCustom from '../../helpers/InputCustom';
import { Button, Checkbox, Flex, Input, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { CREATE_EXPERIENCES } from '../../../queries/editProfil-queries';

export default function EditExperience(): JSX.Element {
  const [jobName, setJobName] = useState('');
  const [company, setCompany] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [description, setDescription] = useState('');
  const [isActualJob, setIsActualJob] = useState(false);

  const toast = useToast();

  const [createExperiences] = useMutation(CREATE_EXPERIENCES);

  const postExperiences = async () => {
    try {
      await createExperiences({
        variables: {
          experiences: [
            {
              jobName,
              company,
              dateStart,
              dateEnd,
              isActualJob,
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
        placeholder="Intitulé du poste"
        focusBorderColor="#393E46"
        onChange={(e) => setJobName(e.target.value)}
        marginY={5}
        borderColor="#8b9ab0"
        _hover={{ borderColor: '#424a57' }}
        backgroundColor="whiteAlpha.900"
      />
      <Input
        type="text"
        placeholder="Entreprise"
        focusBorderColor="#393E46"
        onChange={(e) => setCompany(e.target.value)}
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
          name="Post actuel"
          onClick={() => setIsActualJob(!isActualJob)}
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
        onClick={() => postExperiences()}
        backgroundColor="whiteAlpha.900"
      >
        Enregistrer
      </Button>
    </Flex>
  );
}
