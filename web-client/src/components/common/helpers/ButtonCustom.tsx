import React from 'react';

interface ButtonProps {
  label: string;
  avatarPath: string;
}

export default function ButtonCustom(props: ButtonProps): JSX.Element {
  const { label, avatarPath } = props;
  console.log('buttonProps', props.label);
  return (
    <div>
      <button
        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
        type="button"
        style={{ transition: 'all .15s ease' }}
      >
        <img alt="..." className="w-5 mr-1" src={avatarPath} />
        {label}
      </button>
    </div>
  );
}
