import React from 'react';
import './PublicationCloneTsx.css';

import data from '../../../../../data-samples/articles-journal.json';
import ArticleCreation from '../../ArticleCreation/ArticleCreation';

export default function PublicationCloneTsx() {
  return (
    <div className="lg:p-10 bg-gray-300 space-y-5 flex flex-col items-center justify-center">
      {data.map((article) => (
        <section key={article.ArticleID} className="p-1 max-w-screen-lg">
          <div className="flex bg-black text-white justify-between rounded-tl-md rounded-tr-md p-4">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:self-start">
              <div className="px-4">
                <img
                  className="rounded-full h-16 w-16 flex items-center justify-center"
                  src={article.User.Avatar}
                  alt="avatar"
                />
              </div>
              <div>
                <div className="mt-5 text-lg">
                  <span>{article.User.Pseudo}</span>&nbsp;&nbsp;
                  <span className="italic underline">S&rsquo;abonner</span>
                </div>
                <div>
                  {article.Date}&nbsp;|&nbsp;
                  <span className="font-bold">#{article.Communaute.Name}</span>
                  &nbsp;#
                  {article.Skills.Name}
                </div>
              </div>
            </div>
            <div className="font-bold text-5xl mx-2 leading-3 flex flex-col md:flex-row items-center">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <article className="bg-white rounded-br-md rounded-bl-md md:flex">
            <div className="py-3 md:w-1/2 md:mx-2 mx-auto flex items-center">
              <img
                className="rounded-md mx-auto"
                src={article.Content.Img}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between text-center">
              <div className="py-5 px-2">
                <h3 className="font-bold uppercase text-xl mb-3">
                  {article.Content.Title}
                </h3>
                <p className="text-justify px-4">{article.Content.Text}</p>
              </div>
              <div className="w-full md:w-1/4 self-end py-2 rounded-md md:rounded-tr-none md:rounded-bl-none bg-black text-white hover:bg-white hover:text-black font-semibold">
                Lire la suite
                <span>fleche</span>
              </div>
            </div>
          </article>
        </section>
      ))}
    </div>
  );
}
