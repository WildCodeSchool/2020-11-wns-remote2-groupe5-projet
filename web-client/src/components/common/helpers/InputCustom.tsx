import React from 'react';

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  setValue: any;
  //setValue: Dispatch<SetStateAction<string>>
}

export default function InputCustom(props: InputProps): JSX.Element {
  const { placeholder, type, value, setValue } = props;
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-gray-700 text-xs font-bold mb-2"
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
