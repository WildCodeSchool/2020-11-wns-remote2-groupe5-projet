import React from 'react';
import './ArticlePage.css';
import { ReactComponent as IconLike } from '../../../assets/icons/icon_like.svg';
import { ReactComponent as IconComment } from '../../../assets/icons/icon_journal.svg';
import { ReactComponent as IconRegister } from '../../../assets/icons/icon_register.svg';
// import ArticleTools from './ArticleTools';
import CommentPage from '../Comment/CommentContainer';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ONE_BY_ID } from '../../../queries/article-queries';
import ContentFields from './ContentFields';

export default function ArticlePage(): JSX.Element {
  const { article } = useParams<{ article: string }>();
  const { data } = useQuery(GET_ONE_BY_ID, {
    variables: {
      articleID: article,
    },
  });

  return (
    <div className="lg:p-10 space-y-5 flex items-center justify-center">
      <section
        key={data && data.articleID}
        className="p-1 w-4/5 max-w-screen-lg"
      >
        <div className="flex bg-gray-800 text-white justify-between rounded-tl-md rounded-tr-md p-4">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left md:self-start">
            <div className="px-4">
              <img
                className="rounded-full h-16 w-16 flex items-center justify-center"
                src={'https://www.w3schools.com/howto/img_avatar.png'}
                alt="avatar"
              />
            </div>
            <div>
              <div className="mt-5 text-lg">
                <span>{data && data.oneArticle.user.pseudo}</span>&nbsp;&nbsp;
                <span className="italic underline">S&rsquo;abonner</span>
              </div>
              <div>
                {data && data.oneArticle.date}&nbsp;|&nbsp;
                <span className="font-bold">Dev</span>
                &nbsp;# Javascript
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
              <div>
                {data && (
                  <ContentFields
                    contentFields={data.oneArticle.contentFields}
                  />
                )}
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* <ArticleTools /> */}
      <CommentPage />
    </div>
  );
}
