import React from 'react';

export default function Informations({ data }: { data: any }): JSX.Element {
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
