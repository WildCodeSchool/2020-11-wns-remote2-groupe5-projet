import React from 'react';
import InputCustom from '../../../helpers/InputCustom';

export default function ExperienceModification(): JSX.Element {
  return (
    <div className=" py-10 md:px-16 sm:px-4">
      <InputCustom type="text" placeholder="Prénom" textColor="text-white" />
      <InputCustom
        type="text"
        placeholder="Nom de famille"
        textColor="text-white"
      />
      <InputCustom type="number" placeholder="Âge" textColor="text-white" />
      <InputCustom type="email" placeholder="Email" textColor="text-white" />
      <InputCustom
        type="tel"
        placeholder="Numéro de téléphone"
        textColor="text-white"
      />
      <label className="text-white block uppercase text-xs font-bold">
        Biographie
        <textarea
          placeholder="Biographie"
          className="h-32 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
        />
      </label>
    </div>
  );
}
