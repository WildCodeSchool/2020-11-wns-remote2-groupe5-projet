import React from 'react';
import './ProfilView.css';
import InputCustom from '../../../helpers/InputCustom';

export default function ProfilView(): JSX.Element {
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
        <h2 className="mt-44 ml-28 text-2xl">Informations générales</h2>
        <div className="flex flex-col items-center">
          <div className="w-4/5 bg-gray-800 rounded-md">
            <div className="px-36 py-10">
              <InputCustom
                type="text"
                placeholder="Prénom"
                textColor="text-white"
              />
              <InputCustom
                type="text"
                placeholder="Nom de famille"
                textColor="text-white"
              />
              <InputCustom
                type="number"
                placeholder="Âge"
                textColor="text-white"
              />
              <InputCustom
                type="email"
                placeholder="Email"
                textColor="text-white"
              />
              <InputCustom
                type="tel"
                placeholder="Numéro de téléphone"
                textColor="text-white"
              />
              <InputCustom
                type="text"
                placeholder="Biographie"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
