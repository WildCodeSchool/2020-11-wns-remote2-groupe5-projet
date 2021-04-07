import React from 'react';
import { useQuery } from '@apollo/client';
import { USER_INFO } from '../../../../../../queries/user-queries';

export default function Degrees(): JSX.Element {
  const { data } = useQuery(USER_INFO);

  return (
    <div>
      <div>{data?.me?.diplomas.diplomaName}</div>
      <div>{data?.me?.diplomas.school}</div>
      <div>{data?.me?.diplomas.dateStart}</div>
      <div>{data?.me?.diplomas.dateEnd}</div>
      <div>{data?.me?.diplomas.isActualSchool}</div>
      <div>{data?.me?.diplomas.description}</div>
    </div>
  );
}
