import React, { Dispatch, SetStateAction } from 'react';

import LogoCustom from '../../components/helpers/LogoCustom';
import LogInCard from '../../components/LogInCard';

type LogInPageProps = {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function LogInPage({ setIsAuthenticated }: LogInPageProps): JSX.Element {
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
          <div className="flex items-center justify-between max-w-5xl w-full h-full">
            <div className="w-full z-10 lg:w-5/12 px-4">
              <LogInCard setIsAuthenticated={setIsAuthenticated} />
            </div>
            <div className="w-full z-10 lg:w-5/12 px-4">
              <LogoCustom />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
