import React from 'react';
import InputCustom from '../../common/helpers/InputCustom';
import ButtonCustom from '../../common/helpers/ButtonCustom';
import ArrowRight from '../../../assets/icons/icon_arrow_right.svg';
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
};

type SignInForm01Props = {
  user: User;
  onUserChange: <P extends keyof User>(prop: P, value: User[P]) => void;
  onMinusSignInForm: () => void;
  onPlusSignInForm: () => void;
};

export default function SignInForm02({
  user,
  onUserChange,
  onMinusSignInForm,
  onPlusSignInForm,
}: SignInForm01Props): JSX.Element {
  return (
    <div>
      <div>
        <InputCustom
          type="text"
          placeholder="Numéro de téléphone"
          value={user.phoneNumber}
          setValue={(e: string) => {
            onUserChange('phoneNumber', e);
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
      </div>
      <div className="flex flex-row">
        <ButtonCustom
          label="Prev"
          onClick={onMinusSignInForm}
          avatarPath={ArrowLeft}
        />
        <ButtonCustom
          label="Next"
          onClick={onPlusSignInForm}
          avatarPath={ArrowRight}
        />
      </div>
    </div>
  );
}