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
          className="bg-gray-300 active:bg-gray-100 text-gray-900 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase hover:shadow-md hover:bg-gray-900 hover:text-white inline-flex items-center font-bold text-xs"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={onClick}
        >
          <i className="w-8 mr-3 fas fa-long-arrow-alt-left fa-2x" />
          {label}
        </button>
      ) : (
        <button
          className="bg-gray-300 active:bg-gray-100 text-gray-900 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase hover:shadow-md hover:bg-gray-900 hover:text-white inline-flex items-center font-bold text-xs"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={onClick}
        >
          {label}
          <i className="w-8 ml-3 fas fa-long-arrow-alt-right fa-2x" />
        </button>
      )}
    </div>
  );
}
