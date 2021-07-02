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
    <div>
      <div>
        <i></i>
      </div>
      <div>
        {noPlaceholder ? null : (
          <label
            htmlFor="grid-password"
          >
            {placeholder}
          </label>
        )}
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          style={{ transition: 'all .15s ease' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
