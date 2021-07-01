import React from 'react';
import InputCustom from '../helpers/InputCustom';
import ButtonCustom from '../helpers/ButtonCustom';
// import ArrowRight from '../../../assets/icons/icon_arrow_right.svg';
// import ArrowLeft from '../../../assets/icons/icon_arrow_left.svg';
import { User } from './SignInCard';
import { AtSignIcon, LockIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, VStack, InputGroup, InputLeftElement, Input, InputRightElement, Button } from '@chakra-ui/react';
import { FaUser, FaKey, FaPhone, FaCity, FaCalendarAlt, FaGlobe, FaBirthdayCake, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import conditionsSignIn01 from '../../utils/ConditionsSignIn';

type SignInForm01Props = {
  user: User;
  onUserChange: <P extends keyof User>(prop: P, value: User[P]) => void;
  onMinusSignInForm: () => void;
  onPlusSignInForm: () => void;
};

export default function SignInForm02({
  user,
  onUserChange,
  onMinusSignInForm,
  onPlusSignInForm,
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
              type="tel" 
              placeholder="Phone number"
              backgroundColor="gray.100"
              borderColor='gray.500'
              focusBorderColor="gray.800"
              errorBorderColor="red.300"
              value={user.phoneNumber}
              onChange={(e) => {
                onUserChange('phoneNumber', e.target.value);
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
                placeholder="City"
                backgroundColor="gray.100"
                borderColor='gray.500'
                focusBorderColor="gray.800"
                errorBorderColor="red.300"
                value={user.city}
                onChange={(e) => {
                  onUserChange('city', e.target.value);
                }}
                isRequired
              />
            </InputGroup>
            <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaBirthdayCake color="gray.800" />}
            />
              <Input 
                type="text" 
                placeholder="Age"
                backgroundColor="gray.100"
                borderColor='gray.500'
                focusBorderColor="gray.800"
                errorBorderColor="red.300"
                value={user.age}
                onChange={(e) => {
                  onUserChange('age', e.target.value);
                }}
                isRequired
              />
            </InputGroup>
            <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaGlobe color="gray.800" />}
            />
              <Input 
                type="text" 
                placeholder="Bio"
                backgroundColor="gray.100"
                borderColor='gray.500'
                focusBorderColor="gray.800"
                errorBorderColor="red.300"
                value={user.bio}
                onChange={(e) => {
                  onUserChange('bio', e.target.value);
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
            <Button
                variant="ghost"
                rightIcon={<FaArrowRight />}
                onClick={onPlusSignInForm}
                colorScheme="gray.100"
                _hover={{borderColor:"gray.800"}}
                _checked={{borderColor:"gray.800"}}
              >Next
            </Button>
        </Box>
        </VStack>
      </Box>
  
  );
}
