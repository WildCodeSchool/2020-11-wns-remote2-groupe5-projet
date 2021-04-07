import React from 'react';
import { useQuery } from '@apollo/client';
import { USER_INFO } from '../../../../../../queries/user-queries';

export default function Informations(): JSX.Element {
  const { data } = useQuery(USER_INFO);

  return (
    <div>
      <div>{data?.me?.pseudo}</div>
      <div>{data?.me?.age}</div>
      <div>{data?.me?.email}</div>
      <div>{data?.me?.phoneNumber}</div>
      <div>{data?.me?.bio}</div>
    </div>
  );
}
