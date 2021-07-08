import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import React from 'react';

type InputProps = {
  placeholder?: string;
  noPlaceholder?: boolean;
  noPadding?: boolean;
  type: string;
  textColor?: string;
  value: string;
  setValue: (value: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  icon?: React.ReactNode;
  width?: string;
};

export default function InputCustom(props: InputProps): JSX.Element {
  const {
    placeholder,
    noPlaceholder,
    noPadding,
    type,
    textColor,
    value,
    setValue,
    required,
    icon,
    width,
  } = props;

  // const [coloringText, setColoringText] = useState(textColor);

  // if (!coloringText) {
  //   setColoringText('text-gray-700');
  // }

  return (
    <InputGroup my="16px">
      {icon && <InputLeftElement pointerEvents="none" children={icon} />}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        isRequired={required}
        borderColor="#FFF"
        w={width}
        //textColor="#FFF"
        backgroundColor="gray.800"
        color="#FFF"
        focusBorderColor="#FFF"
        errorBorderColor="red.300"
      />
    </InputGroup>
  );
}
