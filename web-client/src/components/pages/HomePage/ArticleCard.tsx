import React from 'react';
import { ReactComponent as IconArrow } from '../../../assets/icons/icon_arrow_right.svg';
import { Link } from 'react-router-dom';

interface User {
  userID: number;
  pseudo: string;
  avatar: string;
}
interface Community {
  communauteID: number;
  name: string;
}
interface Skills {
  skillID: number;
  name: string;
}
interface Content {
  img: string;
  title: string;
  text: string;
}

type ArticleCardProps = {
  key: number;
  articleID: number;
  user: User;
  communaute: Community;
  skills: Skills;
  date: string;
  content: Content;
};

export default function ArticleCard(article: any): JSX.Element {
  return (
    <section className="p-1 max-w-screen-lg">
      <div className="flex bg-gray-800 text-white justify-between rounded-tl-md rounded-tr-md p-4">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:self-start">
          <div className="px-4">
            <img
              className="rounded-full h-16 w-16 flex items-center justify-center"
              src={
                article?.user?.avatar
                  ? article.user.avatar
                  : 'https://www.w3schools.com/howto/img_avatar.png'
              }
              alt="avatar"
            />
          </div>
          <div>
            <div className="mt-5 text-lg">
              <span>{article.user.pseudo}</span>&nbsp;&nbsp;
              <span className="italic underline">S&rsquo;abonner</span>
            </div>
            <div>
              {Date}&nbsp;|&nbsp;
              <span className="font-bold">
                #{article?.communaute?.name ? article.communaute.name : 'dev'}
              </span>
              &nbsp;#
              {article?.skills?.name ? article.skills.name : 'javascript'}
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
            src={
              article?.content?.img
                ? article.content.img
                : 'https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png'
            }
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between text-center">
          <div className="py-5 px-2">
            <h3 className="font-bold uppercase text-xl mb-3">
              {article.title}
            </h3>
            <p className="text-justify px-4">{article.description}</p>
          </div>
          <div className="w-full md:w-1/4 self-end py-2 rounded-md md:rounded-tr-none md:rounded-bl-none bg-gray-800 text-white hover:bg-gray-600 font-semibold">
            <Link to={'articles/' + article.articleID}>
              Lire la suite
              <IconArrow className="w-7 h-9 inline" />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
