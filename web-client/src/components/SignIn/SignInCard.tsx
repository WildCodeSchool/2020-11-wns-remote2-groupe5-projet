import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../../queries/user-queries';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignInForm01 from './SignInForm01';
import SignInForm02 from './SignInForm02';
import SignInForm03 from './SignInForm03';
import renderProgressBar from '../helpers/ProgressBar';

export type User = {
  pseudo: string;
  email: string;
  phoneNumber: string;
  password: string;
  surePassword: string;
  age: string;
  city: string;
  bio: string;
  skillz: string;
  community: string;
};

const defaultUser: User = {
  pseudo: '',
  email: '',
  phoneNumber: '',
  password: '',
  surePassword: '',
  age: '',
  city: '',
  bio: '',
  skillz: '',
  community: '',
};

export default function SignInCard(): JSX.Element {
  const [user, setUser] = useState<User>(defaultUser);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [displaySignInCard, setDisplaySignInCard] = useState(0);
  const [signIn] = useMutation(SIGN_IN);

  const onUserChange = <P extends keyof User>(prop: P, value: User[P]) => {
    setUser({ ...user, [prop]: value });
  };

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
      alert(errorMessage);
    }
  };

  const onPlusSignInForm = () => {
    setDisplaySignInCard(displaySignInCard + 1);
  };

  const onMinusSignInForm = () => {
    setDisplaySignInCard(displaySignInCard - 1);
  };

  const renderSignInForm = () => {
    if (displaySignInCard <= 0) {
      return (
        <SignInForm01
          user={user}
          onUserChange={onUserChange}
          onChangeSignInForm={onPlusSignInForm}
        />
      );
    }
    if (displaySignInCard === 1) {
      return (
        <SignInForm02
          user={user}
          onUserChange={onUserChange}
          onMinusSignInForm={onMinusSignInForm}
          onPlusSignInForm={onPlusSignInForm}
        />
      );
    }
    if (displaySignInCard === 2) {
      return (
        <SignInForm03
          user={user}
          onUserChange={onUserChange}
          onMinusSignInForm={onMinusSignInForm}
        />
      );
    }
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
      {redirect && <Redirect to="/" />}
      <div className="rounded-t mb-0 px-6 py-6">
        <div className="text-center mb-3">
          <h4 className="text-gray-600 uppercase font-bold">Sign In</h4>
        </div>
        <hr className="mt-6 border-b-1 border-gray-400" />
      </div>
      <div className="flex-auto px-4 lg: px-8 py-10 pt-0">
        <div className="text-gray-500 text-center mb-3 font-bold pb-2">
          <Link to="/">
            <small>Or LOG IN with credentials</small>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            {renderSignInForm()}
            {displaySignInCard === 2 ? (
              <div className="text-center mt-8">
                <div className="my-6">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox text-gray-800 ml-1 w-4 h-4"
                      style={{ transition: 'all .15s ease' }}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      J&apos;accepte la politique de confidentialité
                    </span>
                  </label>
                </div>
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-32"
                  type="submit"
                  style={{ transition: 'all .15s ease' }}
                >
                  SIGN IN
                </button>
              </div>
            ) : null}
          </form>
          {renderProgressBar(displaySignInCard)}
        </div>
      </div>
    </div>
  );
}
