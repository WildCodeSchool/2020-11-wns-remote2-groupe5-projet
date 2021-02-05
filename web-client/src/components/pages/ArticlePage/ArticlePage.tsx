import React from 'react';
import './ArticlePage.css';
// import ArticleTools from './ArticleTools';
import CommentPage from '../Comment/CommentContainer';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ONE_BY_ID } from '../../../queries/article-queries';
import ContentFields from './ContentFields';
import { parseDateArticle } from '../../../utils/Date';

export default function ArticlePage(): JSX.Element {
  const { article } = useParams<{ article: string }>();
  const { data } = useQuery(GET_ONE_BY_ID, {
    variables: {
      articleID: article,
    },
  });
  console.log('user', data && data.oneArticle.contentFields);

  return (
    <div className="lg:p-10 space-y-5 flex justify-center">
      <section
        key={data && data.articleID}
        className="p-1 w-3/4 max-w-screen-lg"
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
                {data && parseDateArticle(data.oneArticle.date)}
                &nbsp;|&nbsp;
                {/* {data && data.oneArticle.date}&nbsp;|&nbsp; */}
                <span className="font-bold">
                  {/* #{data && data.communaute.name} */}
                </span>
                &nbsp;#
                {/* {data && data.skills.name} */}
              </div>
            </div>
          </div>
          <div className="leading-3 flex flex-col md:flex-row items-center text-xl">
            <span>
              16&nbsp;
              <i className="fas fa-heart text-red-500"></i>
              &nbsp;
            </span>
            <span>
              12&nbsp;
              <i className="far fa-comment-dots"></i>
              &nbsp;
            </span>
            <span>
              7&nbsp;<i className="far fa-bookmark"></i>
            </span>
          </div>
        </div>
        <article className="bg-white rounded-br-md rounded-bl-md">
          <div className="flex flex-col justify-between text-center">
            <div className="py-5 px-2 break-words">
              {/* <h3 className="font-bold uppercase text-xl mb-3">
                {data && data.oneArticle.title}
              </h3> */}
              {/* <p className="text-justify px-4">
                {data && data.oneArticle.text}
              </p> */}
              <img
                className="rounded-md mx-auto my-5"
                // src={data && data.content.img}
                alt=""
              />
              <p className="text-justify px-4">{data && data.text}</p>
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
