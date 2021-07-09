import React from 'react';
import { User } from './SignInCard';
import {
  Box,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Select,
  Text,
  Flex,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react';
import { FaUsers, FaLightbulb, FaArrowLeft } from 'react-icons/fa';

export enum CommunitiesEnum {
  Devlopment = 'development',
  History = 'history',
  Photography = 'photography',
  Design = 'design',
}

export const communitiesMap: Record<CommunitiesEnum, string | undefined> = {
  [CommunitiesEnum.Devlopment]: 'Développement web',
  [CommunitiesEnum.History]: 'Histoire',
  [CommunitiesEnum.Photography]: 'Photographie',
  [CommunitiesEnum.Design]: 'Design',
};

export const comu = ['development', 'history', 'photography', 'design'];

type SignInForm01Props = {
  user: User;
  onUserChange: <P extends keyof User>(prop: P, value: User[P]) => void;
  handleCommunities: (value: string) => void;
  onMinusSignInForm: () => void;
  onDeleteCommunity: (community: string) => void;
};

export default function SignInForm03({
  user,
  onUserChange,
  handleCommunities,
  onMinusSignInForm,
  onDeleteCommunity,
}: SignInForm01Props): JSX.Element {
  console.log('user in FORM', user);

  return (
    <Box marginTop="24px">
      <VStack spacing="24px">
        <Flex w="100%" direction="column" justify="space-between">
          <Text>Communautés</Text>
          <Select
            backgroundColor="#FFF"
            borderColor="gray.800"
            focusBorderColor="gray.800"
            errorBorderColor="red.300"
            onChange={(e) => handleCommunities(e.target.value)}
          >
            <option selected disabled>
              Communauté
            </option>
            {comu.map((com) => {
              return (
                <option value={com}>
                  {communitiesMap[com as CommunitiesEnum]}
                </option>
              );
            })}
          </Select>
          <Flex w="100%" wrap="wrap" mt="8px">
            {user.communities.map((com, i) => {
              return (
                <Tag
                  key={i}
                  borderRadius="full"
                  variant="solid"
                  bgColor="gray.800"
                  colorScheme="#FFF"
                  onClick={() => onDeleteCommunity(com)}
                  mx="4px"
                  my="2px"
                >
                  <TagLabel>{communitiesMap[com as CommunitiesEnum]}</TagLabel>
                  <TagCloseButton />
                </Tag>
              );
            })}
          </Flex>
        </Flex>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaLightbulb color="gray.800" />}
          />
          <Input
            type="text"
            placeholder="Skillz"
            backgroundColor="gray.100"
            borderColor="gray.500"
            focusBorderColor="gray.800"
            errorBorderColor="red.300"
            value={user.skillz}
            onChange={(e) => {
              onUserChange('skillz', e.target.value);
            }}
          />
        </InputGroup>
        <Box>
          <Button
            variant="ghost"
            leftIcon={<FaArrowLeft />}
            onClick={onMinusSignInForm}
            colorScheme="gray.100"
            _hover={{ borderColor: 'gray.800' }}
            _checked={{ borderColor: 'gray.800' }}
          >
            Prev
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
