import React, { Dispatch, SetStateAction, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTH } from '../../../queries/user-queries';
import InputCustom from '../helpers/InputCustom';
import { Link } from 'react-router-dom';

type LogInCardProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function LogInCard({
  setIsAuthenticated,
}: LogInCardProps): JSX.Element {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticate] = useMutation(AUTH);

  const authenticateAndHandleError = async () => {
    try {
      await authenticate({
        variables: {
          input: { email: userEmail, password: userPassword },
        },
      });
      setIsAuthenticated(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full h-530 mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
      <div className="rounded-t mb-0 px-6 py-6">
        <div className="text-center mb-3">
          <h4 className="text-gray-600 uppercase font-bold">log in</h4>
        </div>
        <hr className="mt-6 border-b-1 border-gray-400" />
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div className="text-gray-500 text-center mb-3 font-bold">
          <Link to="/signIn">
            <small>Or SIGN IN if you don&apos;t have account</small>
          </Link>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            authenticateAndHandleError();
          }}
        >
          <InputCustom
            type="email"
            placeholder="email"
            setValue={setUserEmail}
            value={userEmail}
          />
          <InputCustom
            type="password"
            placeholder="password"
            setValue={setUserPassword}
            value={userPassword}
          />
          {errorMessage ? <p>{errorMessage}</p> : <p></p>}
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
              type="submit"
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
