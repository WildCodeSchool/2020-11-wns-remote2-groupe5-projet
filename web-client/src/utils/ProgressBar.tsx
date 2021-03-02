import React from 'react';

const renderProgressBar = (step: number) => {
  if (step <= 0) {
    return (
      <div className="flex items-center mt-6">
        <div className=" box-content bg-gray-900 h-3 w-9 mx-5 rounded" />
        <div className=" box-content bg-gray-500 h-2 w-9 mx-5 rounded" />
        <div className=" box-content bg-gray-500 h-2 w-9 mx-5 rounded" />
      </div>
    );
  } else if (step === 1) {
    return (
      <div className="flex items-center mt-6">
        <div className=" box-content bg-gray-500 h-2 w-9 mx-5 rounded" />
        <div className=" box-content bg-gray-900 h-3 w-9 mx-5 rounded" />
        <div className=" box-content bg-gray-500 h-2 w-9 mx-5 rounded" />
      </div>
    );
  } else if (step === 2) {
    return (
      <div className="flex items-center mt-6">
        <div className=" box-content bg-gray-500 h-2 w-9 mx-5 rounded" />
        <div className=" box-content bg-gray-500 h-2 w-9 mx-5 rounded" />
        <div className=" box-content bg-gray-900 h-3 w-9 mx-5 rounded" />
      </div>
    );
  }
};

export default renderProgressBar;
