import React from 'react';
import InputCustom from '../helpers/InputCustom';
import ButtonCustom from '../helpers/ButtonCustom';
// import ArrowRight from '../../../assets/icons/icon_arrow_right.svg';
// import ArrowLeft from '../../../assets/icons/icon_arrow_left.svg';
import { User } from './SignInCard';

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
          icon="phone"
        />
        <InputCustom
          type="city"
          placeholder="Ville"
          value={user.city}
          setValue={(e: string) => {
            onUserChange('city', e);
          }}
          icon="city"
        />
        <InputCustom
          type="text"
          placeholder="Age"
          value={user.age}
          setValue={(e: string) => {
            onUserChange('age', e);
          }}
          icon="user-clock"
        />
        <InputCustom
          type="text"
          placeholder="Bio"
          value={user.bio}
          setValue={(e: string) => {
            onUserChange('bio', e);
          }}
          icon="globe-europe"
        />
      </div>
      <div className="flex flex-row justify-between ">
        <ButtonCustom
          label="Prev"
          onClick={onMinusSignInForm}
          // avatarPath={ArrowLeft}
        />
        <ButtonCustom
          label="Next"
          onClick={onPlusSignInForm}
          // avatarPath={ArrowRight}
        />
      </div>
    </div>
  );
}
