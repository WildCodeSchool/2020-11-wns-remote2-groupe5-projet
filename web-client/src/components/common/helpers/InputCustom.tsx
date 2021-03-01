import React, { useState } from 'react';

interface InputProps {
  placeholder?: string;
  type: string;
  textColor?: string;
  value: string;
  setValue: (value: string) => void;
}

export default function InputCustom(props: InputProps): JSX.Element {
  const { placeholder, type, value, setValue, textColor } = props;

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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
