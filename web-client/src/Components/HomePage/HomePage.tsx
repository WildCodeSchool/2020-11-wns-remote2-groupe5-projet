import React from 'react';
import PublicationCloneTsx from '../MainSection/FeedPage/Publication/PublicationCloneTsx/PublicationCloneTsx';

export default function HomePage(): JSX.Element {
  return (
    <div className="lg:p-10 bg-gray-300 space-y-5 flex flex-col items-center justify-center">
      <PublicationCloneTsx />
    </div>
  );
}
