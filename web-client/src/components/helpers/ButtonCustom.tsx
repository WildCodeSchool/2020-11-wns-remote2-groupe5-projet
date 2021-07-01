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
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={onClick}
        >
          <i/>
          {label}
        </button>
      ) : (
        <button
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={onClick}
        >
          {label}
          <i />
        </button>
      )}
    </div>
  );
}
