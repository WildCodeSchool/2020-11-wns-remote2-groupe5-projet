import React from 'react';

export default function Degrees({ data }: { data: any }): JSX.Element {
  return (
    <div>
      {data?.me?.diplomas.map((diploma: any) => (
        <div key={diploma.diplomaName}>
          <div>{diploma.diplomaName}</div>
          <div>{diploma.school}</div>
          <div>{diploma.dateStart}</div>
          <div>{diploma.dateEnd}</div>
          <div>{diploma.isActualSchool}</div>
          <div>{diploma.description}</div>
        </div>
      ))}
    </div>
  );
}
