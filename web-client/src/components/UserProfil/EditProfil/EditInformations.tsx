import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_AVATAR } from '../../../queries/picture-queries';
import { EDIT_PROFIL } from '../../../queries/user-queries';
import { Flex } from '@chakra-ui/layout';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
  Text,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

export default function EditInformations(): JSX.Element {
  const { currentUser } = useContext(CurrentUserContext);

  const [pseudo, setPseudo] = useState<string>(currentUser?.pseudo!);
  const [age, setAge] = useState<number>(currentUser?.age!);
  const [email, setEmail] = useState<string>(currentUser?.email!);
  const [phoneNumber, setPhoneNumber] = useState(currentUser?.phoneNumber!);
  const [bio, setBio] = useState<string>(currentUser?.bio!);

  const toast = useToast();

  const [postAvatar] = useMutation(UPLOAD_AVATAR);
  const [editProfil] = useMutation(EDIT_PROFIL);

  const postProfil = async () => {
    try {
      await editProfil({
        variables: {
          data: {
            pseudo,
            age,
            email,
            bio,
            phoneNumber,
          },
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

  const uploadAvatar = async ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    try {
      validity.valid &&
        postAvatar({
          variables: { file },
        });
      toast({
        description: 'Image upload! :)',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'Erreur',
        description: "L'image ne s'est pas chargée!",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex p={4} flexDirection="column" alignContent="flex-start">
      <form>
        <label htmlFor="file">
          <Text>Select a file</Text>
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={uploadAvatar}
          />
        </label>
      </form>

      <Input
        type="text"
        placeholder="Pseudo"
        value={pseudo}
        focusBorderColor="#393E46"
        onChange={(e) => setPseudo(e.target.value)}
        marginY={5}
        borderColor="#8b9ab0"
        _hover={{ borderColor: '#424a57' }}
        backgroundColor="whiteAlpha.900"
      />
      <NumberInput value={age} defaultValue={age} min={8} max={99}>
        <NumberInputField onChange={() => setAge(age)} />
        <NumberInputStepper>
          {age && <NumberIncrementStepper onClick={() => setAge(age + 1)} />}
          {age && <NumberDecrementStepper onClick={() => setAge(age - 1)} />}
        </NumberInputStepper>
      </NumberInput>
      <Input
        type="email"
        placeholder="Adresse Email"
        value={email}
        focusBorderColor="#393E46"
        onChange={(e) => setEmail(e.target.value)}
        marginY={5}
        borderColor="#8b9ab0"
        _hover={{ borderColor: '#424a57' }}
        backgroundColor="whiteAlpha.900"
      />

      <Input
        type="tel"
        value={phoneNumber}
        placeholder="Numéro de téléphone"
        focusBorderColor="#393E46"
        onChange={(e) => setPhoneNumber(e.target.value)}
        marginY={5}
        borderColor="#8b9ab0"
        _hover={{ borderColor: '#424a57' }}
        backgroundColor="whiteAlpha.900"
      />
      <Textarea
        focusBorderColor="#393E46"
        value={bio}
        placeholder="Biographie"
        onChange={(e) => setBio(e.target.value)}
        borderColor="#8b9ab0"
        _hover={{ borderColor: '#424a57' }}
        backgroundColor="whiteAlpha.900"
      />
      <Button
        marginTop="20px"
        alignSelf="center"
        width="100px"
        colorScheme="black"
        variant="outline"
        onClick={() => postProfil()}
        backgroundColor="whiteAlpha.900"
      >
        Enregistrer
      </Button>
    </Flex>
  );
}
