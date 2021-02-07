import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

type PublishModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  setPublishModal: (value: boolean) => void;
  postArticle: (description: string) => Promise<void>;
};

export default function PublishModal({
  isOpen,
  title,
  description,
  setPublishModal,
  postArticle,
}: PublishModalProps): JSX.Element {
  const [descriptionValue, setDescriptionValue] = useState('');
  useEffect(() => {
    setDescriptionValue(description);
  }, [description]);

  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, 0.35)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(31, 41, 55)',
          borderRadius: '10px',
          border: 'none',
          width: '550px',
          height: '400px',
        },
      }}
    >
      <section className="flex flex-col h-full justify-between">
        <h1 className="text-gray-100 text-center text-xl mb-3">{title}</h1>
        <div className="flex flex-col h-3/5">
          <span className="text-gray-100 mb-2">Description :</span>
          <textarea
            className="mb-5 resize-none border rounded-md h-full"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </div>

        <div className="self-end">
          <button
            onClick={() => setPublishModal(false)}
            className="bg-gray-300 rounded-full font-bold px-4 py-1 transition duration-300 ease-in-out hover:bg-gray-400 mr-6 self-end"
          >
            Annuler
          </button>
          <button
            onClick={() => postArticle(descriptionValue)}
            className="bg-gray-300 rounded-full font-bold px-4 py-1 transition duration-300 ease-in-out hover:bg-gray-400 self-end"
          >
            Publier
          </button>
        </div>
      </section>
    </Modal>
  );
}
