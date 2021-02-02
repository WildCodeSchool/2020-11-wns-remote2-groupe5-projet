import React, { Dispatch, SetStateAction, useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTH, SIGN_IN } from '../../../queries/user-queries';
import InputCustom from '../../common/helpers/InputCustom';
import { Redirect } from 'react-router-dom';
//import User from '../../../../../src/models/User';

type User = {
  pseudo: string;
  email: string;
  phoneNumber: string;
  password: string;
  surePassword: string;
  age: string;
  city: string;
  bio: string;
};

//type SignUpCardProps = {};

const defaultUser: User = {
  pseudo: 'gigi',
  email: 'gigi@gmail.com',
  phoneNumber: '0607080504',
  password: '12345678',
  surePassword: '12345678',
  age: '23',
  city: 'TLSE',
  bio: 'YOOOSHA',
};

export default function SignInCard(): JSX.Element {
  const [user, setUser] = useState(defaultUser);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [signIn] = useMutation(SIGN_IN);

  const onUserChange = <P extends keyof User>(prop: P, value: User[P]) => {
    setUser({ ...user, [prop]: value });
    // console.log('user', user);
  };
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');

  const submitForm = async () => {
    try {
      await signIn({
        variables: {
          data: {
            pseudo: user.pseudo,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password,
            age: parseInt(user.age),
            city: user.city,
            bio: user.bio,
          },
        },
      });
      alert('vous etes inscrit');
      setRedirect(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
      {redirect && <Redirect to="/" />}
      <div className="rounded-t mb-0 px-6 py-6">
        <div className="text-center mb-3">
          <h6 className="text-gray-600 text-sm font-bold">Sign In</h6>
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <InputCustom
            type="text"
            placeholder="Pseudo"
            value={user.pseudo}
            setValue={(e: string) => {
              onUserChange('pseudo', e);
            }}
          />
          <InputCustom
            type="email"
            placeholder="Email"
            value={user.email}
            setValue={(e: string) => {
              onUserChange('email', e);
            }}
          />
          <InputCustom
            type="text"
            placeholder="Numéro de téléphone"
            value={user.phoneNumber}
            setValue={(e: string) => {
              onUserChange('phoneNumber', e);
            }}
          />
          <InputCustom
            type="password"
            placeholder="Mot de passe"
            value={user.password}
            setValue={(e: string) => {
              onUserChange('password', e);
            }}
          />
          <InputCustom
            type="password"
            placeholder="Vérifiez votre mot de passe"
            value={user.surePassword}
            setValue={(e: string) => {
              onUserChange('surePassword', e);
            }}
          />
          <InputCustom
            type="city"
            placeholder="Ville"
            value={user.city}
            setValue={(e: string) => {
              onUserChange('city', e);
            }}
          />
          <InputCustom
            type="text"
            placeholder="Age"
            value={user.age}
            setValue={(e: string) => {
              onUserChange('age', e);
            }}
          />
          <InputCustom
            type="text"
            placeholder="Bio"
            value={user.bio}
            setValue={(e: string) => {
              onUserChange('bio', e);
            }}
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
                J&apos;accepte la politique de confidentialité
              </span>
            </label>
          </div>
          <div className="text-center mt-6">
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
              type="submit"
              style={{ transition: 'all .15s ease' }}
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
