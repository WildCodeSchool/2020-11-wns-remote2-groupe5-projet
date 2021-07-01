import React, { Dispatch, SetStateAction, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTH } from '../queries/user-queries';
import { Link } from 'react-router-dom';
import { Box, Text, VStack, Flex, Button, Checkbox, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { AtSignIcon, LockIcon, WarningIcon } from '@chakra-ui/icons';

type LogInCardProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function LogInCard({
  setIsAuthenticated,
}: LogInCardProps): JSX.Element {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticate] = useMutation(AUTH);

  const authenticateAndHandleError = async () => {
    try {
      await authenticate({
        variables: {
          input: {
            email: userEmail,
            password: userPassword,
            rememberMe: rememberMe,
          },
        },
      });
      setIsAuthenticated(true);
    } catch (error) {
      setErrorMessage(error.message);
      console.log('ERROR', error);
    }
  };

  return (
    <Box backgroundColor="gray.300" borderRadius="xl" p="24px">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            authenticateAndHandleError();
          }}
        >
      <VStack spacing="32px">
        <Box>
          <Text color="gray.700" fontSize="3xl" fontWeight="bold" textAlign="center">LOG IN</Text>
        </Box>
        <Box width="100%" borderBottom="2px" borderBottomColor="gray.400" paddingBottom="24px">
          <Link to="/signIn">
            <Text 
              color="gray.500" 
              textAlign="center" 
              _hover={{color: "#FFF"}}
            >
              Or SIGN IN if you don&apos;t have account
          </Text>
          </Link>
        </Box>
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
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                isRequired
              />
          </InputGroup>
          <InputGroup size="md">
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.800" />}
            />
            <Input
              pr="4.5rem"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              backgroundColor="gray.100"
              borderColor='gray.500'
              focusBorderColor="gray.800"
              errorBorderColor="red.300"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
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
          <Box>
          {errorMessage ? (
            <Flex alignItems="center">
              <WarningIcon color="#DE1F31" mr="16px"/>
              <Text color="#DE1F31">
                {errorMessage}
              </Text>
            </Flex>
          ) : (
            <Text></Text>
            )}
          </Box>
          <Flex w="100%" justifyContent="start" alignItems="center">
              <Checkbox
                id="customCheckLogin"
                type="checkbox"
                colorScheme="blackAlpha"
                onClick={() => setRememberMe(!rememberMe)}
              />
              <Text color="gray.500" pl="16px"> 
                Remember me
              </Text>
          </Flex>
          <Flex  justify="center">
            <Button
              type="submit"
              text="log in"
              colorScheme="gray.100"
              _hover={{color:"yellow.200"}}
              backgroundColor="gray.900"
            >Log In
          </Button>
          </Flex>
      </VStack>
    </form>
    </Box>
  );
}
