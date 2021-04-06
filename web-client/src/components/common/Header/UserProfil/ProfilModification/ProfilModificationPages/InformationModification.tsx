import React, { useState } from 'react';
import InputCustom from '../../../../helpers/InputCustom';

export default function ExperienceModification(): JSX.Element {
  const [pseudo, setPseudo] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bio, setBio] = useState('');

  return (
    <div className=" py-10 md:px-16 sm:px-4">
      <InputCustom
        type="text"
        placeholder="Pseudo"
        textColor="text-white"
        value={pseudo}
        setValue={setPseudo}
      />

      <InputCustom
        type="number"
        placeholder="Âge"
        textColor="text-white"
        value={age}
        setValue={setAge}
      />
      <InputCustom
        type="email"
        placeholder="Email"
        textColor="text-white"
        value={email}
        setValue={setEmail}
      />
      <InputCustom
        type="tel"
        placeholder="Numéro de téléphone"
        textColor="text-white"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      <label className="text-white block uppercase text-xs font-bold">
        Biographie
        <textarea
          placeholder="Biographie"
          className="h-32 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full mt-2"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </label>
    </div>
  );
}
