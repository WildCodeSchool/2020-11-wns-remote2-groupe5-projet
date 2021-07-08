import React, { useState } from 'react';
import { Box, Button, Checkbox, Flex, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { CREATE_EXPERIENCES } from '../../../queries/editProfil-queries';
import InputCustom from '../../helpers/InputCustom';

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
      <InputCustom
        type="text"
        placeholder="Intitulé du Poste"
        value={jobName}
        setValue={(e) => setJobName(e.target.value)}
      />
      <InputCustom
        type="text"
        placeholder="Entreprise"
        value={company}
        setValue={(e) => setCompany(e.target.value)}
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
          onClick={() => setIsActualJob(!setIsActualJob)}
          display="flex"
          color="#fff"
        >
          Poste actuel
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
        onClick={() => postExperiences()}
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
