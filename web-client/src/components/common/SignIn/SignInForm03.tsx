import React from 'react';
import InputCustom from '../../common/helpers/InputCustom';
import ButtonCustom from '../../common/helpers/ButtonCustom';
import ArrowLeft from '../../../assets/icons/icon_arrow_left.svg';

type User = {
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

type SignInForm01Props = {
  user: User;
  onUserChange: <P extends keyof User>(prop: P, value: User[P]) => void;
  onMinusSignInForm: () => void;
};

export default function SignInForm03({
  user,
  onUserChange,
  onMinusSignInForm,
}: SignInForm01Props): JSX.Element {
  return (
    <div>
      <InputCustom
        type="text"
        placeholder="Communauté"
        value={user.community}
        setValue={(e: string) => {
          onUserChange('phoneNumber', e);
        }}
        icon="users"
      />
      <InputCustom
        type="city"
        placeholder="Skillz"
        value={user.skillz}
        setValue={(e: string) => {
          onUserChange('city', e);
        }}
        icon="lightbulb"
      />
      <div className="flex flex-row-reverse">
        <ButtonCustom
          label="Prev"
          onClick={onMinusSignInForm}
          avatarPath={ArrowLeft}
        />
      </div>
    </div>
  );
}
