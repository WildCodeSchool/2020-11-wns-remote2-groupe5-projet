import React, { useContext, useState } from 'react';
import GlobalContext from '../../../../utils/GlobalContext';
import ActionsButtons from './ProfilNavigation/ActionsButtons';
import ProfilModification from './ProfilModification/ProfilModification';
import ProfilView from './ProfilView/ProfilView';

export default function UserProfil(): JSX.Element {
  const context = useContext(GlobalContext);

  const [goToModificationPage, setGoToModificationPage] = useState<boolean>(
    false
  );

  return (
    <div className="lg:p-10 bg-gray-300 space-y-5 flex flex-col items-center justify-center h-full pt-30">
      <span className="flex-col flex items-center absolute top-16 mt-6 z-10">
        <img
          className="h-36 w-36 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        User Name
      </span>
      <div className="w-8/12 h-full bg-white rounded-md">
        <h1 className="mt-44 mb-2 text-3xl text-center">
          {context.actualPage}
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-4/5 bg-gray-800 rounded-md">
            {!goToModificationPage ? <ProfilView /> : <ProfilModification />}
          </div>
          <div>
            <ActionsButtons
              goToModificationPage={goToModificationPage}
              setGoToModificationPage={setGoToModificationPage}
            />
          </div>
          <button
            onClick={() => setGoToModificationPage(!goToModificationPage)}
          >
            {!goToModificationPage ? 'Modifier' : 'Annuler'}
          </button>
        </div>
      </div>
    </div>
  );
}
