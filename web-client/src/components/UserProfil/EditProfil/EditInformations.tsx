import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { useMutation } from '@apollo/client';
import { UPLOAD_AVATAR } from '../../../queries/picture-queries';
import { EDIT_PROFIL } from '../../../queries/user-queries';

import {
  Flex,
  useToast,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  FormLabel,
} from '@chakra-ui/react';

import { AtSignIcon } from '@chakra-ui/icons';
import { FaBirthdayCake, FaGlobe, FaPhone } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FiUpload } from 'react-icons/fi';

export default function EditInformations(): JSX.Element {
  const { currentUser, refetch } = useContext(CurrentUserContext);
  const [pseudo, setPseudo] = useState<string>(currentUser?.pseudo!);
  const [age, setAge] = useState<string>(currentUser?.age!);
  const [email, setEmail] = useState<string>(currentUser?.email!);
  const [phoneNumber, setPhoneNumber] = useState(currentUser?.phoneNumber!);
  const [bio, setBio] = useState<string>(currentUser?.bio!);

  const toast = useToast();

  const [postAvatar] = useMutation(UPLOAD_AVATAR);
  const [editProfil] = useMutation(EDIT_PROFIL);

  const postProfil = async () => {
    let ageToNumber = parseInt(age);
    try {
      await editProfil({
        variables: {
          data: {
            pseudo,
            age: ageToNumber,
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
        (await postAvatar({
          variables: { file },
        }));
      refetch && refetch();
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
    <form>
      <Flex p={4} flexDirection="column" alignItems="center">
        <FormLabel htmlFor="file">
          <Flex
            minWidth="204"
            w="100%"
            h="40px"
            alignItems="center"
            justify="space-evenly"
            borderRadius="md"
            borderWidth={1}
            borderColor="#FFF"
          >
            <Input
              id="file"
              type="file"
              accept="image/*"
              onChange={uploadAvatar}
              hidden
            />
            <FiUpload size="17px" color="#FFF" />
            <Text color="#FFF">Importe un avatar</Text>
          </Flex>
        </FormLabel>
        <InputGroup my="16px">
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineUser color="#FFF" />}
          />
          <Input
            type="text"
            placeholder="Pseudo"
            borderColor="#FFF"
            backgroundColor="gray.800"
            color="#FFF"
            focusBorderColor="#FFF"
            errorBorderColor="red.300"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            isRequired
          />
        </InputGroup>
        <InputGroup my="16px">
          <InputLeftElement
            p="8px"
            pointerEvents="none"
            children={<FaBirthdayCake color="#FFF" />}
          />
          <Input
            type="text"
            placeholder="Age"
            borderColor="#FFF"
            backgroundColor="gray.800"
            color="#FFF"
            focusBorderColor="#FFF"
            errorBorderColor="red.300"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            isRequired
          />
        </InputGroup>
        <InputGroup marginY="16px">
          <InputLeftElement
            pointerEvents="none"
            children={<AtSignIcon color="#FFF" />}
          />
          <Input
            type="email"
            placeholder="Email"
            borderColor="#FFF"
            backgroundColor="gray.800"
            color="#FFF"
            focusBorderColor="#FFF"
            errorBorderColor="red.300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup my="16px">
          <InputLeftElement
            pointerEvents="none"
            children={<FaPhone color="#FFF" />}
          />
          <Input
            type="tel"
            placeholder="Phone number"
            borderColor="#FFF"
            backgroundColor="gray.800"
            color="#FFF"
            focusBorderColor="#FFF"
            errorBorderColor="red.300"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputGroup>
        <InputGroup my="16px">
          <InputLeftElement
            pointerEvents="none"
            children={<FaGlobe color="#FFF" />}
          />
          <Input
            type="text"
            placeholder="Bio"
            borderColor="#FFF"
            backgroundColor="gray.800"
            color="#FFF"
            focusBorderColor="#FFF"
            errorBorderColor="red.300"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </InputGroup>
        <Button
          marginTop="20px"
          alignSelf="center"
          width="100px"
          color="#FFF"
          variant="outline"
          onClick={() => postProfil()}
          backgroundColor="gray.800"
          _checked={{ backgroundColor: 'gray.800' }}
          _focus={{ backgroundColor: 'gray.800' }}
          _hover={{ backgroundColor: 'gray.800' }}
        >
          Enregistrer
        </Button>
      </Flex>
    </form>
  );
}
