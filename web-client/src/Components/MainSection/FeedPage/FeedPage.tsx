import React from 'react';
import PublicationCloneTsx from './Publication/PublicationCloneTsx/PublicationCloneTsx';

export default function FeedPage(): JSX.Element {
  return (
    <div className="container flex justify-center w-full h-full bg-gray-300">
      {/* <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            // backgroundImage:
            //   'url(' + require('assets/img/register_bg_2.png') + ')',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div> */}
      <div className="mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center">
          <PublicationCloneTsx />
        </div>
      </div>
    </div>
  );
}
