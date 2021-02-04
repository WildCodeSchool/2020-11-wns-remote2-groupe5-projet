import React from 'react';
import InputCustom from '../../../helpers/InputCustom';

export default function ExperienceModification(): JSX.Element {
  return (
    <div className=" py-10 md:px-16 sm:px-4">
      <InputCustom
        type="text"
        placeholder="Intitulé du poste"
        textColor="text-white"
      />
      <InputCustom
        type="text"
        placeholder="Entreprise"
        textColor="text-white"
      />
      <InputCustom
        type="email"
        placeholder="Email pro"
        textColor="text-white"
      />
      <span className="flex space-x-8">
        <InputCustom
          type="date"
          placeholder="Date de début"
          textColor="text-white"
        />
        <InputCustom
          type="date"
          placeholder="Date de fin"
          textColor="text-white"
        />
        <label className="text-white block uppercase text-xs font-bold">
          Poste actuel
          <input type="checkbox" name="Poste actuel" />
        </label>
      </span>
      <label className="text-white block uppercase text-xs font-bold">
        Description
        <textarea
          placeholder="Description"
          className="h-32 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
        />
      </label>
    </div>
  );
}
