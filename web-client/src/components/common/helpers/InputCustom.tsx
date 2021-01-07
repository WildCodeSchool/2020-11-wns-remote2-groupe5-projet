import React, { useState } from 'react';

interface InputProps {
  placeholder: string;
  type: string;
  // avatarPath: string;
  textColor?: string;
}

export default function InputCustom(props: InputProps): JSX.Element {
  const { placeholder, type, textColor } = props;

  const [coloringText, setColoringText] = useState(textColor);

  if (!coloringText) {
    setColoringText('text-gray-700');
  }

  return (
    <div className="relative w-full mb-3">
      <label
        className={`block uppercase ${coloringText} text-xs font-bold mb-2 `}
        htmlFor="grid-password"
      >
        {placeholder}
      </label>
      <input
        type={type}
        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
        placeholder={placeholder}
        style={{ transition: 'all .15s ease' }}
      />
    </div>
  );
}
