import React from 'react';

import InputCustom from '../helpers/InputCustom';
import LogoCustom from '../helpers/LogoCustom';

export default function LogInCard(): JSX.Element {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
      <div className="rounded-t mb-0 px-6 py-6">
        <div className="text-center mb-3">
          <h6 className="text-gray-600 text-sm font-bold">Sign In with</h6>
        </div>
        <div className="btn-wrapper text-center">
          {/* <ButtonCustom label="google" avatarPath={logoGoogle} /> */}
          {/* <ButtonCustom label="GitHub" avatarPath={logoGithub} /> */}
        </div>
        <hr className="mt-6 border-b-1 border-gray-400" />
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div className="text-gray-500 text-center mb-3 font-bold">
          <small>Or log in with credentials</small>
        </div>
        <form>
          <InputCustom type="email" placeholder="email" />
          <InputCustom type="password" placeholder="password" />
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                id="customCheckLogin"
                type="checkbox"
                className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                style={{ transition: 'all .15s ease' }}
              />
              <span className="ml-2 text-sm font-semibold text-gray-700">
                Remember me
              </span>
            </label>
          </div>
          <div className="text-center mt-6">
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
              type="button"
              style={{ transition: 'all .15s ease' }}
            >
              log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
