import React from 'react';
import InputCustom from '../helpers/InputCustom';
import ButtonCustom from '../helpers/ButtonCustom';
// import ArrowLeft from '../../../assets/icons/icon_arrow_left.svg';
import { User } from './SignInCard';
import { Box, VStack, InputGroup, InputLeftElement, Input, Button } from '@chakra-ui/react';
import { FaPhone, FaCity, FaBirthdayCake, FaGlobe, FaArrowLeft } from 'react-icons/fa';

type SignInForm01Props = {
  user: User;
  onUserChange: <P extends keyof User>(prop: P, value: User[P]) => void;
  onMinusSignInForm: () => void;
};

export default function SignInForm03({
  user,
  onUserChange,
  onMinusSignInForm,
}: SignInForm01Props): JSX.Element {
  return (
    <Box marginTop="24px">
    <VStack spacing='24px'>
      <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<FaPhone color="gray.800" />}
      />
        <Input 
          type="text" 
          placeholder="Community"
          backgroundColor="gray.100"
          borderColor='gray.500'
          focusBorderColor="gray.800"
          errorBorderColor="red.300"
          value={user.community}
          onChange={(e) => {
            onUserChange('community', e.target.value);
          }}
          isRequired
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaCity color="gray.800" />}
        />
          <Input 
            type="text" 
            placeholder="Skillz"
            backgroundColor="gray.100"
            borderColor='gray.500'
            focusBorderColor="gray.800"
            errorBorderColor="red.300"
            value={user.skillz}
            onChange={(e) => {
              onUserChange('skillz', e.target.value);
            }}
            isRequired
          />
        </InputGroup>
          <Box>
          <Button
            variant="ghost"
             leftIcon={<FaArrowLeft />}
             onClick={onMinusSignInForm}
            colorScheme="gray.100"
            _hover={{borderColor:"gray.800"}}
            _checked={{borderColor:"gray.800"}}
          >Prev
        </Button>
    </Box>
    </VStack>
  </Box>
);
}
