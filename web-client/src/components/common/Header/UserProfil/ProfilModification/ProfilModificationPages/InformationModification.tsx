import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_AVATAR } from '../../../../../../queries/picture-queries';
import InputCustom from '../../../../helpers/InputCustom';

export default function ExperienceModification(): JSX.Element {
  const [pseudo, setPseudo] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bio, setBio] = useState('');

  const [mutate] = useMutation(UPLOAD_AVATAR);

  const uploadAvatar = async ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    try {
      validity.valid &&
        mutate({
          variables: { file },
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" py-10 md:px-16 sm:px-4">
      <form>
        <label
          htmlFor="file"
          className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input
            id="file"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={uploadAvatar}
          />
        </label>
      </form>

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
