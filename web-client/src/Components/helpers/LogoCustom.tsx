import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/icons/logo_SkillShare.svg';

export default function LogoCustom(): JSX.Element {
  return (
    <div className="flex flex-row items-center">
      <p className="text-white text-6xl"> Skillz</p>
      <div>
        <ReactLogo className="w-30" />
      </div>
      <p className="text-white text-6xl">Share</p>
    </div>
  );
}
