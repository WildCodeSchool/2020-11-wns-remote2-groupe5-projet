import React from 'react';
import InputCustom from '../../common/helpers/InputCustom';
import ButtonCustom from '../../common/helpers/ButtonCustom';
import ArrowLeft from '../../../assets/icons/icon_arrow_left.svg';
import { User } from './SignInCard';

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
      {/* <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input type="file" className="hidden" onChange={uploadPicture} />
      </label> */}
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
