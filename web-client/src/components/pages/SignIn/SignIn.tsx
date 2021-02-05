import React from 'react';

import LogoCustom from '../../common/helpers/LogoCustom';
import SignInCard from './SignInCard';

export default function SignIn(): JSX.Element {
  return (
    <main>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="container mx-auto px-4 w-full h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <SignInCard />
            </div>
            <div className="w-full z-10 lg:w-4/12 px-4">
              <LogoCustom />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
