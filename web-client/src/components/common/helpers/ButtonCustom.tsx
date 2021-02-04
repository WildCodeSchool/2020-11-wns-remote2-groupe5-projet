import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label?: string;
  avatarPath?: string;
}

export default function ButtonCustom(props: ButtonProps): JSX.Element {
  const { label, avatarPath, onClick } = props;
  return (
    <div>
      {props.label === 'Prev' ? (
        <button
          className="bg-gray-900 active:bg-gray-100 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={onClick}
        >
          <img alt="..." className="w-8 mr-3" src={avatarPath} />
          {label}
        </button>
      ) : (
        <button
          className="bg-gray-900 active:bg-gray-100 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={onClick}
        >
          {label}
          <img alt="..." className="w-8 ml-3" src={avatarPath} />
        </button>
      )}
    </div>
  );
}
