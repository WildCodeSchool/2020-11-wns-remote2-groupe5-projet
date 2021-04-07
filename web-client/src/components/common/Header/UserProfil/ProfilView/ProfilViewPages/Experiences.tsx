import React from 'react';
import { useQuery } from '@apollo/client';
import { USER_INFO } from '../../../../../../queries/user-queries';

export default function Experiences(): JSX.Element {
  const { data } = useQuery(USER_INFO);

  return (
    <div>
      <div>{data?.me?.experiences.jobName}</div>
      <div>{data?.me?.experiences.company}</div>
      <div>{data?.me?.experiences.dateStart}</div>
      <div>{data?.me?.experiences.dateEnd}</div>
      <div>{data?.me?.experiences.isActualJob}</div>
      <div>{data?.me?.experiences.description}</div>
    </div>
  );
}
