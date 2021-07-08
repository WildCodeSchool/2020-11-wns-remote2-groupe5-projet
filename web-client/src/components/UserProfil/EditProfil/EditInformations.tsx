import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { useMutation } from '@apollo/client';
import { UPLOAD_AVATAR } from '../../../queries/picture-queries';
import { EDIT_PROFIL } from '../../../queries/user-queries';

import { Flex, useToast, Button } from '@chakra-ui/react';

import { AtSignIcon } from '@chakra-ui/icons';
import { FaBirthdayCake, FaGlobeEurope, FaPhone } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import InputCustom from '../../helpers/InputCustom';
import UploadCustom from '../../helpers/UploadCustom';

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
        <UploadCustom onChange={uploadAvatar} />
        <InputCustom
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          setValue={(e) => setPseudo(e.target.value)}
          icon={<AiOutlineUser color="#FFF" />}
        />
        <InputCustom
          type="text"
          placeholder="Age"
          value={age}
          setValue={(e) => setAge(e.target.value)}
          icon={<FaBirthdayCake color="#FFF" />}
        />
        <InputCustom
          type="email"
          placeholder="Email"
          value={email}
          setValue={(e) => setEmail(e.target.value)}
          icon={<AtSignIcon color="#FFF" />}
        />
        <InputCustom
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          setValue={(e) => setPhoneNumber(e.target.value)}
          icon={<FaPhone color="#FFF" />}
        />
        <InputCustom
          type="text"
          placeholder="Bio"
          value={bio}
          setValue={(e) => setBio(e.target.value)}
          icon={<FaGlobeEurope color="#FFF" />}
        />
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
