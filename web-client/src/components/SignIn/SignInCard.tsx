import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../../queries/user-queries';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignInForm01 from './SignInForm01';
import SignInForm02 from './SignInForm02';
import SignInForm03 from './SignInForm03';
import renderProgressBar from '../helpers/ProgressBar';
import {
  Box,
  VStack,
  Text,
  Button,
  Flex,
  Checkbox,
  useToast,
} from '@chakra-ui/react';

export type User = {
  pseudo: string;
  email: string;
  phoneNumber: string;
  password: string;
  surePassword: string;
  age: string;
  city: string;
  bio: string;
  skillz: string;
  communities: string[];
};

const defaultUser: User = {
  pseudo: '',
  email: '',
  phoneNumber: '',
  password: '',
  surePassword: '',
  age: '',
  city: '',
  bio: '',
  skillz: '',
  communities: [],
};

export default function SignInCard(): JSX.Element {
  const [user, setUser] = useState<User>(defaultUser);
  const [redirect, setRedirect] = useState(false);
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [displaySignInCard, setDisplaySignInCard] = useState(0);
  const [signIn] = useMutation(SIGN_IN);
  const toast = useToast();

  const onUserChange = <P extends keyof User>(prop: P, value: User[P]) => {
    setUser({ ...user, [prop]: value });
  };

  const handleCommunities = (value: string) => {
    if (!user.communities.includes(value))
      setUser({ ...user, communities: [...user.communities, value] });
  };

  const onDeleteCommunity = (community: string) => {
    setUser({
      ...user,
      communities: [...user.communities.filter((com) => com !== community)],
    });
  };

  const submitForm = async () => {
    try {
      await signIn({
        variables: {
          data: {
            pseudo: user.pseudo,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password,
            age: parseInt(user.age),
            city: user.city,
            bio: user.bio,
          },
          communities: [
            ...user.communities.map((com) => {
              return {
                community: com,
              };
            }),
          ],
        },
      });
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setRedirect(true);
    } catch (error) {
      setErrorMessage(error.message);
      alert(errorMessage);
    }
  };

  const onPlusSignInForm = () => {
    setDisplaySignInCard(displaySignInCard + 1);
  };

  const onMinusSignInForm = () => {
    setDisplaySignInCard(displaySignInCard - 1);
  };

  const renderSignInForm = () => {
    if (displaySignInCard <= 0) {
      return (
        <SignInForm01
          user={user}
          onUserChange={onUserChange}
          onChangeSignInForm={onPlusSignInForm}
        />
      );
    }
    if (displaySignInCard === 1) {
      return (
        <SignInForm02
          user={user}
          onUserChange={onUserChange}
          onMinusSignInForm={onMinusSignInForm}
          onPlusSignInForm={onPlusSignInForm}
        />
      );
    }
    if (displaySignInCard === 2) {
      return (
        <SignInForm03
          user={user}
          handleCommunities={handleCommunities}
          onUserChange={onUserChange}
          onDeleteCommunity={onDeleteCommunity}
          onMinusSignInForm={onMinusSignInForm}
        />
      );
    }
  };

  return (
    <Box backgroundColor="gray.300" borderRadius="xl" p="24px" minWidth="343px">
      {redirect && <Redirect to="/" />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <VStack>
          <Box>
            <Text
              color="gray.700"
              fontSize="3xl"
              fontWeight="bold"
              textAlign="center"
            >
              SIGN IN
            </Text>
          </Box>
          <Box
            width="100%"
            borderBottom="2px"
            borderBottomColor="gray.400"
            paddingBottom="24px"
          >
            <Link to="/">
              <Text
                color="gray.500"
                textAlign="center"
                _hover={{ color: '#FFF' }}
              >
                Or LOG IN with credentials
              </Text>
            </Link>
          </Box>
          <Box width="100%">
            {renderSignInForm()}
            {displaySignInCard === 2 ? (
              <>
                <Flex
                  w="100%"
                  justifyContent="start"
                  alignItems="center"
                  marginBottom="16px"
                >
                  <Checkbox
                    id="customCheckLogin"
                    type="checkbox"
                    colorScheme="blackAlpha"
                    onClick={() => setIsPolicyAccepted(!isPolicyAccepted)}
                  />
                  <Text fontSize="small" color="gray.500" pl="16px">
                    Accepter la politique de confidentialité
                  </Text>
                </Flex>
                <Flex justify="center">
                  <Button
                    type="submit"
                    text="log in"
                    colorScheme="gray.100"
                    _hover={{ color: 'yellow.200' }}
                    backgroundColor="gray.900"
                  >
                    Log In
                  </Button>
                </Flex>
              </>
            ) : null}
          </Box>
          <Flex alignItems="center" justify="center" w="100%">
            {renderProgressBar(displaySignInCard)}
          </Flex>
        </VStack>
      </form>
    </Box>
  );
}
