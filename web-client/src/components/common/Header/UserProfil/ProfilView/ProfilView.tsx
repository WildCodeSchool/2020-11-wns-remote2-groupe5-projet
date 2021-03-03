import React, { useState } from 'react';
import './ProfilView.css';
import InformationModification from '../ProfilModification/InformationModification';
import ExperienceModification from '../ProfilModification/ExperienceModification';
import DegreeModification from '../ProfilModification/DegreeModification';
import PreviousNextButtons from './PreviousNextButtons';
import { useMutation, useQuery } from '@apollo/client';
import { UPLOAD_PICTURE } from '../../../../../queries/picture-queries';

export default function ProfilView(): JSX.Element {
  const [mutate] = useMutation(UPLOAD_PICTURE);

  const [actualPage, setActualPage] = useState<string>(
    'Informations générales'
  );

  const uploadPicture = ({
    target: {
      validity,
      files: [file],
    },
  }: any) => {
    validity.valid &&
      mutate({
        variables: { file },
      }),
      console.log('FILE', file);
  };

  return (
    <div className="lg:p-10 bg-gray-300 space-y-5 flex flex-col items-center justify-center h-full pt-30">
      <span className="flex-col flex items-center absolute top-16 mt-6 z-10">
        <img
          className="h-36 w-36 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        User Name
      </span>
      <div className="w-8/12 h-full bg-white rounded-md">
        <form>
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
            onChange={uploadPicture}
          />
          <label
            htmlFor="file"
            className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
          />
        </form>
        <h1 className="mt-44 mb-2 text-3xl text-center">{actualPage}</h1>
        <div className="flex flex-col items-center">
          <div className="w-4/5 bg-gray-800 rounded-md">
            {actualPage == 'Informations générales' && (
              <InformationModification />
            )}
            {actualPage == 'Expériences' && <ExperienceModification />}
            {actualPage == 'Diplômes' && <DegreeModification />}
          </div>
        </div>
        <PreviousNextButtons
          actualPage={actualPage}
          setActualPage={setActualPage}
        />
      </div>
    </div>
  );
}
