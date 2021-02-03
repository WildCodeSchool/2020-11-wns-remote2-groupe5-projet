import React from 'react';
import './ArticlePage.css';
import data from '../../../data-samples/articles-journal.json';
import { ReactComponent as IconLike } from '../../../assets/icons/icon_like.svg';
import { ReactComponent as IconComment } from '../../../assets/icons/icon_journal.svg';
import { ReactComponent as IconRegister } from '../../../assets/icons/icon_register.svg';
// import ArticleTools from './ArticleTools';
import CommentPage from '../Comment/CommentContainer';
import { useParams } from 'react-router-dom';

export default function ArticlePage(): JSX.Element {
  const { article } = useParams<{ article: string }>();
  const displayArticle = data.filter(
    (item) => item.articleID === Number(article)
  )[0];
  return (
    <div className="lg:p-10 space-y-5 flex items-center justify-center">
      <section
        key={displayArticle.articleID}
        className="p-1 w-4/5 max-w-screen-lg"
      >
        <div className="flex bg-gray-800 text-white justify-between rounded-tl-md rounded-tr-md p-4">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left md:self-start">
            <div className="px-4">
              <img
                className="rounded-full h-16 w-16 flex items-center justify-center"
                src={displayArticle.user.avatar}
                alt="avatar"
              />
            </div>
            <div>
              <div className="mt-5 text-lg">
                <span>{displayArticle.user.pseudo}</span>&nbsp;&nbsp;
                <span className="italic underline">S&rsquo;abonner</span>
              </div>
              <div>
                {displayArticle.date}&nbsp;|&nbsp;
                <span className="font-bold">
                  #{displayArticle.communaute.name}
                </span>
                &nbsp;#
                {displayArticle.skills.name}
              </div>
            </div>
          </div>
          <div className="leading-3 flex flex-col md:flex-row items-center">
            <span>
              16
              <IconLike className="w-7 h-7 inline" />
              &nbsp;
            </span>
            <span>
              12
              <IconComment className="w-7 h-7 inline" />
              &nbsp;
            </span>
            <span>
              7
              <IconRegister className="w-7 h-7 inline" />
            </span>
          </div>
        </div>
        <article className="bg-white rounded-br-md rounded-bl-md">
          <div className="flex flex-col justify-between text-center">
            <div className="py-5 px-2">
              <h3 className="font-bold uppercase text-xl mb-3">
                {displayArticle.content.title}
              </h3>
              <p className="text-justify px-4">{displayArticle.content.text}</p>
              <img
                className="rounded-md mx-auto my-5"
                src={displayArticle.content.img}
                alt=""
              />
              <p className="text-justify px-4">{displayArticle.content.text}</p>
            </div>
          </div>
        </article>
      </section>
      {/* <ArticleTools /> */}
      <CommentPage />
    </div>
  );
}
