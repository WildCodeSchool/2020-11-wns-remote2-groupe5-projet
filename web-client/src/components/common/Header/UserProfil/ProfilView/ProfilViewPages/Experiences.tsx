import React from 'react';

export default function Experiences({ data }: { data: any }): JSX.Element {
  return (
    <div>
      {data?.me?.experiences.map((xp: any) => (
        <div key={xp.jobName}>
          <div>{xp.jobName}</div>
          <div>{xp.company}</div>
          <div>{xp.dateStart}</div>
          <div>{xp.dateEnd}</div>
          <div>{xp.isActualJob}</div>
          <div>{xp.description}</div>
        </div>
      ))}
    </div>
  );
}
