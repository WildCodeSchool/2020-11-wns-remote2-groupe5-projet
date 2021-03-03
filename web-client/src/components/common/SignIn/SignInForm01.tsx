import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../../queries/user-queries';
import InputCustom from '../../common/helpers/InputCustom';
import ButtonCustom from '../../common/helpers/ButtonCustom';
import ArrowRight from '../../../assets/icons/icon_arrow_right.svg';
import conditionsSignIn01 from '../../../utils/ConditionsSignIn';
import { User } from './SignInCard';

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
          required
          icon="user"
        />
        <InputCustom
          type="email"
          placeholder="Email"
          value={user.email}
          setValue={(e: string) => {
            onUserChange('email', e);
          }}
          required
          icon="at"
        />
        <InputCustom
          type="password"
          placeholder="Mot de passe"
          value={user.password}
          setValue={(e: string) => {
            onUserChange('password', e);
          }}
          required
          icon="key"
        />
        <InputCustom
          type="password"
          placeholder="Vérifiez votre mot de passe"
          value={user.surePassword}
          setValue={(e: string) => {
            onUserChange('surePassword', e);
          }}
          required
          icon="lock"
        />
      </div>
      <div>
        <ButtonCustom
          label="Next"
          onClick={() =>
            conditionsSignIn01(data.allUsers, user, onChangeSignInForm)
          }
          avatarPath={ArrowRight}
        />
      </div>
    </div>
  );
}
