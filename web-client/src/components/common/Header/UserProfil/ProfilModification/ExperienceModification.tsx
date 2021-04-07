import React, { useState } from 'react';
import InputCustom from '../../../helpers/InputCustom';
import { useMutation } from '@apollo/client';
import { CREATE_EXPERIENCES } from '../../../../../queries/editProfil-queries';

export default function ExperienceModification(): JSX.Element {
  const [jobName, setJobName] = useState('');
  const [company, setCompany] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [description, setDescription] = useState('');

  const [createExperiences] = useMutation(CREATE_EXPERIENCES);

  const postExperiences = async () => {
    try {
      await createExperiences({
        variables: {
          experiences: [
            {
              jobName,
              company,
              dateStart,
              dateEnd,
              description,
            },
          ],
        },
      });
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <div className=" py-10 md:px-16 sm:px-4">
      <InputCustom
        type="text"
        placeholder="Intitulé du poste"
        textColor="text-white"
        value={jobName}
        setValue={setJobName}
      />
      <InputCustom
        type="text"
        placeholder="Entreprise"
        textColor="text-white"
        value={company}
        setValue={setCompany}
      />
      {/* <InputCustom
        type="email"
        placeholder="Email pro"
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
          Poste actuel
          <input type="checkbox" name="Poste actuel" />
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
      <button onClick={() => postExperiences()}>Enregistrer</button>
    </div>
  );
}
