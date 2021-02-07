import React from 'react';
import { Link } from 'react-router-dom';
import { Articles_articles } from '../../../schemaTypes';

type ArticleCardProps = {
  article: Articles_articles;
};

export default function ArticleCard({
  article,
}: ArticleCardProps): JSX.Element {
  return (
    <section className="p-1 w-4/5 max-w-screen-lg">
      <div className="flex bg-gray-800 text-white justify-between rounded-tl-md rounded-tr-md p-4">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:self-start">
          <div className="px-4">
            <img
              className="rounded-full h-16 w-16 flex items-center justify-center"
              src={'https://www.w3schools.com/howto/img_avatar.png'}
              alt="avatar"
            />
          </div>
          <div>
            <div className="mt-5 text-lg">
              <span>{article.user.pseudo}</span>&nbsp;&nbsp;
              <span className="italic underline">S&rsquo;abonner</span>
            </div>
            <div>
              3 nov 2019&nbsp;|&nbsp;
              <span className="font-bold">#{'dev'}</span>
              &nbsp;#
              {'javascript'}
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
        <div className="py-3 w-2/5 md:mx-2 mx-auto flex items-center">
          <img
            className="rounded-md mx-auto w-full"
            src={
              'https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png'
            }
            alt=""
          />
        </div>
        <div className="w-3/5 flex flex-col justify-between text-center">
          <div className="py-5 px-2 break-words">
            <h3 className="font-bold uppercase text-xl mb-3">
              {article.title}
            </h3>
            <p className="text-justify px-4">{article.description}</p>
          </div>
          <Link
            to={'articles/' + article.articleID}
            className="w-full md:w-1/4 self-end py-2 rounded-md md:rounded-tr-none md:rounded-bl-none bg-gray-800 text-white hover:bg-gray-600 font-semibold"
          >
            Lire la suite&nbsp;
            <i className="fas fa-arrow-right text-xl"></i>
          </Link>
        </div>
      </article>
    </section>
  );
}
