import React from 'react';
import { Link } from 'react-router-dom';
import './MainPanel.css';

export default function MainPanel(): JSX.Element {
  return (
    <div className="bg-gray-800 flex flex-col items-center text-4xl text-white">
      <Link to="/">
        <i className="fas fa-home m-2 my-3"></i>
      </Link>
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>
      <Link to="/articles/article-creation">
        <i className="fas fa-edit m-2 my-3"></i>
      </Link>
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>

      <i className="far fa-bell m-2 my-3"></i>
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>

      <i className="far fa-bookmark m-2 my-3"></i>
      <div className="flex justify-center">
        <hr className="w-3/4" />
      </div>

      <i className="fas fa-eye m-2 my-3"></i>
    </div>
  );
}
