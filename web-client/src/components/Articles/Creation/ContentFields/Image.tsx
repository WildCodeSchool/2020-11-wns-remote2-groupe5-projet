import React, { useEffect, useRef } from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import ContentFieldContainer from './ContentFieldContainer';

type ImageProps = {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  file: File | null | undefined;
  dispatch: React.Dispatch<Action>;
};

export default function Image({
  index,
  isFirst,
  isLast,
  file,
  dispatch,
}: ImageProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file && inputRef.current) {
      let list = new DataTransfer();
      let fileCopy = new File([file], file.name);

      list.items.add(fileCopy);
      let fileList = list.files;

      inputRef.current.files = fileList;
    } else if (inputRef.current) {
      inputRef.current.files = new DataTransfer().files;
    }
  }, [file]);

  return (
    <ContentFieldContainer
      index={index}
      name="Image"
      isFirst={isFirst}
      isLast={isLast}
      dispatch={dispatch}
      children={
        <>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={() =>
              dispatch({
                type: 'SET_FILE',
                payload: {
                  index,
                  file: inputRef.current?.files
                    ? inputRef.current.files[0]
                    : null,
                },
              })
            }
            placeholder="Selectionnez une image"
          />
        </>
      }
    />
  );
}
