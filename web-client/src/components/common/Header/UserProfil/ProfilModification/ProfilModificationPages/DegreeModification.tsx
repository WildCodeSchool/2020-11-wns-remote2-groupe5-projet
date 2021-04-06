import React, { useState } from 'react';
import InputCustom from '../../../../helpers/InputCustom';

export default function DegreeModification(): JSX.Element {
  const [diplomaName, setDiplomaName] = useState('');
  const [school, setSchool] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className=" py-10 md:px-16 sm:px-4">
      <InputCustom
        type="text"
        placeholder="Intitulé du Diplôme"
        textColor="text-white"
        value={diplomaName}
        setValue={setDiplomaName}
      />
      <InputCustom
        type="text"
        placeholder="Ecole"
        textColor="text-white"
        value={school}
        setValue={setSchool}
      />
      {/* <InputCustom
        type="text"
        placeholder="Niveau d'étude"
        textColor="text-white"
      /> */}
      <span className="flex space-x-8">
        <InputCustom
          type="date"
          placeholder="Date de début"
          textColor="text-white"
          value={dateStart}
          setValue={setDateStart}
        />
        <InputCustom
          type="date"
          placeholder="Date de fin"
          textColor="text-white"
          value={dateEnd}
          setValue={setDateEnd}
        />
        <label className="text-white block uppercase text-xs font-bold">
          Ecole actuelle
          <input type="checkbox" name="Ecole actuel" />
        </label>
      </span>
      <label className="text-white block uppercase text-xs font-bold">
        Description
        <textarea
          placeholder="Description"
          className="h-32 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
    </div>
  );
}
