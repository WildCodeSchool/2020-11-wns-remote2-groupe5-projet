import { Select } from '@chakra-ui/react';
import { graphqlSync } from 'graphql';
import React from 'react';

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

type SelectCommunityProps = {
  onChange: (value: string) => void;
  background: 'white' | 'black';
};

export default function SelectCommunity(
  props: SelectCommunityProps
): JSX.Element {
  const { onChange, background } = props;

  return (
    <Select
      backgroundColor={
        background === 'black'
          ? 'gray.800'
          : background === 'white'
          ? 'gray.100'
          : ''
      }
      borderColor={
        background === 'black'
          ? '#FFF'
          : background === 'white'
          ? 'gray.500'
          : ''
      }
      focusBorderColor={
        background === 'black'
          ? '#FFF'
          : background === 'white'
          ? 'gray.800'
          : ''
      }
      errorBorderColor="red.300"
      onChange={(e) => onChange(e.target.value)}
      textColor={'gray.600'}
      cursor="pointer"
    >
      <option color="gray.800" selected disabled>
        Communauté
      </option>
      {comu.map((com, i) => {
        return (
          <option value={com} key={i}>
            {communitiesMap[com as CommunitiesEnum]}
          </option>
        );
      })}
    </Select>
  );
}
