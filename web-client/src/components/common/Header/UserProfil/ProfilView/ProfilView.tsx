import React, { useState } from 'react';
import './ProfilView.css';
import InformationModification from '../ProfilModification/InformationModification';
import ExperienceModification from '../ProfilModification/ExperienceModification';
import DegreeModification from '../ProfilModification/DegreeModification';
import PreviousNextButtons from './PreviousNextButtons';

export default function ProfilView(): JSX.Element {
  const [actualPage, setActualPage] = useState<string>(
    'Informations générales'
  );

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
