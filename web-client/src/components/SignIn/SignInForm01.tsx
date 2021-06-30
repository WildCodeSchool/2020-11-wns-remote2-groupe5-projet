import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../queries/user-queries';
import { FaUser, FaKey } from "react-icons/fa";
import conditionsSignIn01 from '../../utils/ConditionsSignIn';
import { User } from './SignInCard';
import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, VStack } from '@chakra-ui/react';
import { ArrowForwardIcon, AtSignIcon, LockIcon } from '@chakra-ui/icons';

type SignInForm01Props = {
  user: User;
  onUserChange: <P extends keyof User>(prop: P, value: User[P]) => void;
  onChangeSignInForm: () => void;
};

export default function SignInForm01({
  user,
  onUserChange,
  onChangeSignInForm,
}: SignInForm01Props): JSX.Element {
  const { data } = useQuery(GET_ALL_USERS);
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordVerify, setShowPasswordVerify] = useState(false)

  return (
    <Box marginTop="24px">
      <VStack spacing='24px'>
        <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaUser color="gray.800" />}
        />
          <Input 
            type="text" 
            placeholder="Pseudo"
            backgroundColor="gray.100"
            borderColor='gray.500'
            focusBorderColor="gray.800"
            errorBorderColor="red.300"
            value={user.pseudo}
            onChange={(e) => {
              onUserChange('pseudo', e.target.value);
            }}
            isRequired
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AtSignIcon color="gray.800" />}
          />
            <Input 
              type="email" 
              placeholder="Email"
              backgroundColor="gray.100"
              borderColor='gray.500'
              focusBorderColor="gray.800"
              errorBorderColor="red.300"
              value={user.email}
              onChange={(e) => {
                onUserChange('email', e.target.value);
              }}
              isRequired
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaKey color="gray.800" />}
            />
            <Input
              pr="4.5rem"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              backgroundColor="gray.100"
              borderColor='gray.500'
              focusBorderColor="gray.800"
              errorBorderColor="red.300"
              value={user.password}
              onChange={(e) => {
                onUserChange('password', e.target.value);
              }}
              isRequired
            />
            <InputRightElement width="4.5rem">
                <Button
                  color="gray.100"
                  backgroundColor="gray.900"
                  _hover={{backgroundColor: "gray.900"}}
                  h="1.75rem" 
                  size="sm" 
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.800" />}
            />
            <Input
              pr="4.5rem"
              type={showPasswordVerify ? "text" : "password"}
              placeholder="Verify your password"
              backgroundColor="gray.100"
              borderColor='gray.500'
              focusBorderColor="gray.800"
              errorBorderColor="red.300"
              value={user.surePassword}
              onChange={(e) => {
                onUserChange('surePassword', e.target.value);
              }}
              isRequired
            />
            <InputRightElement width="4.5rem">
                <Button
                  color="gray.100"
                  backgroundColor="gray.900"
                  _hover={{backgroundColor: "gray.900"}}
                  h="1.75rem" 
                  size="sm" 
                  onClick={() => setShowPasswordVerify(!showPasswordVerify)}>
                  {showPasswordVerify ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
          </InputGroup>
            <Box>
            <Button
              variant="ghost"
               rightIcon={<ArrowForwardIcon />}
               onClick={() =>
                        conditionsSignIn01(data.allUsers, user, onChangeSignInForm)
                    }
              colorScheme="gray.100"
              _hover={{borderColor:"gray.800"}}
              _checked={{borderColor:"gray.800"}}
              //backgroundColor="gray.900"
            >Next
          </Button>
      </Box>
      </VStack>
    </Box>
  );
}
