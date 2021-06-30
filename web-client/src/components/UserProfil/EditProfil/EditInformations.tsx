import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_AVATAR } from '../../../queries/picture-queries';
import { EDIT_PROFIL } from '../../../queries/user-queries';
import { Flex } from '@chakra-ui/layout';
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

export default function EditInformations(): JSX.Element {
  const {currentUser} = useContext(CurrentUserContext);

  const [pseudo, setPseudo] = useState<string>(currentUser?.pseudo!);
  const [age, setAge] = useState<number>(currentUser?.age!);
  const [email, setEmail] = useState<string>(currentUser?.email!);
  const [phoneNumber, setPhoneNumber] = useState(currentUser?.phoneNumber!);
  const [bio, setBio] = useState<string>(currentUser?.bio!);

 //console.log("user from context", currentUser)

  const toast = useToast();

  const [mutate] = useMutation(UPLOAD_AVATAR);
  const [editProfil] = useMutation(EDIT_PROFIL);

  const postProfil = async () => {
    console.log("before send", pseudo, age, email, bio, phoneNumber)
    try {
      await editProfil({
        variables: {
          data:
            {
              pseudo,
              age,
              email,
              bio,
              phoneNumber
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
        mutate({
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
        description: "L'image ne c'est pas chargée!",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex p={4} flexDirection="column" alignContent="flex-start">
      <form>
        <label
          htmlFor="file"
          className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input
            id="file"
            type="file"
            accept="image/*"
            className="hidden"
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

      {/* <Input
        type="number"
        placeholder="Age"
        focusBorderColor="#393E46"
        onChange={(e) => setAge(e.target.value)}
        marginY={5}
        borderColor="#8b9ab0"
        _hover={{ borderColor: '#424a57' }}
        backgroundColor="whiteAlpha.900"
      /> */}
      <NumberInput value={age} defaultValue={15} min={8} max={99}>
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

      <label color="black">
        Description
        <Textarea
          focusBorderColor="#393E46"
          value={bio}
          placeholder="Biographie"
          onChange={(e) => setBio(e.target.value)}
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
        onClick={() => postProfil()}
        backgroundColor="whiteAlpha.900"
      >
        Enregistrer
      </Button>
    </Flex>
  );
}
