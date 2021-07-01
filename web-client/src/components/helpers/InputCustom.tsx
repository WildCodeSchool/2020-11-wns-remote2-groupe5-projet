import React, { useState } from 'react';

type InputProps = {
  placeholder?: string;
  noPlaceholder?: boolean;
  noPadding?: boolean;
  type: string;
  textColor?: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  icon?: string;
};

export default function InputCustom(props: InputProps): JSX.Element {
  const {
    placeholder,
    noPlaceholder,
    noPadding,
    type,
    textColor,
    value,
    setValue,
    required,
    icon,
  } = props;

  const [coloringText, setColoringText] = useState(textColor);

  if (!coloringText) {
    setColoringText('text-gray-700');
  }

  return (
    <div className="flex justify-around items-center py-2 pb-3 w-full">
      <div className={`w-1 pt-6 pr-${noPadding ? 0 : 9}`}>
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div>
        {noPlaceholder ? null : (
          <label
            className={`block uppercase ${coloringText} text-xs font-bold mb-2 `}
            htmlFor="grid-password"
          >
            {placeholder}
          </label>
        )}
        <input
          type={type}
          required={required}
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none shadow w-72"
          placeholder={placeholder}
          style={{ transition: 'all .15s ease' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}