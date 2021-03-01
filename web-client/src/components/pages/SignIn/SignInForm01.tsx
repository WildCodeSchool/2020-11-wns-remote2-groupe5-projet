import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS, SIGN_IN } from '../../../queries/user-queries';
import InputCustom from '../../common/helpers/InputCustom';
import ButtonCustom from '../../common/helpers/ButtonCustom';
import ArrowRight from '../../../assets/icons/icon_arrow_right.svg';

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

type SignInForm01Props = {
  user: User;
  onUserChange: <P extends keyof User>(prop: P, value: User[P]) => void;
  onChangeSignInForm: () => void;
};

export default function SignInForm01({
  user,
  onUserChange,
  onChangeSignInForm,
}: SignInForm01Props): JSX.Element {
  const { data } = useQuery(GET_ALL_USERS);

  const conditionsToGoToNextForm = () => {
    if (data.allUsers.some((item: User) => item.pseudo === user.pseudo)) {
      return alert('Ce pseudo est déjà pris :(');
    } else if (user.pseudo === '') {
      return alert(
        `Vous devez renseigner un pseudo pour passer à l'étape suivante`
      );
    } else if (data.allUsers.some((item: User) => item.email === user.email)) {
      return alert(`Cet email n'est pas disponible`);
    } else if (user.email === '') {
      return alert(
        `Vous devez renseigner un email pour passer à l'étape suivante`
      );
    } else if (!user.email.includes('@')) {
      return alert(`L'email n'est pas au bon format`);
    } else if (user.password !== user.surePassword) {
      return alert('Les mots de passe ne correspondent pas');
    } else if (user.password.length < 8) {
      return alert('Le mot de passe doit faire au minimum 8 caractères...');
    } else onChangeSignInForm();
  };

  return (
    <div>
      <div>
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
      </div>
      <div>
        <ButtonCustom
          label="Next"
          onClick={() => conditionsToGoToNextForm()}
          avatarPath={ArrowRight}
        />
      </div>
    </div>
  );
}
