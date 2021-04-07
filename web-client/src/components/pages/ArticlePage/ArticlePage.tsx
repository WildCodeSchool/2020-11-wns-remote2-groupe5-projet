import React, { useContext, useEffect, useState } from 'react';
import './ArticlePage.css';
import CommentPage from './Comment/CommentContainer';
import { useParams } from 'react-router-dom';
import { useMutation, useLazyQuery } from '@apollo/client';
import { GET_ONE_BY_ID, LIKE_ARTICLE } from '../../../queries/article-queries';
import ContentFields from './ContentFields';
import { parseDateArticle } from '../../../utils/Date';
import GlobalContext from '../../../utils/GlobalContext';
import { Articles_articles_likesArticle } from '../../../schemaTypes';
import CommentContainer from './Comment/CommentContainer';

export default function ArticlePage(): JSX.Element {
  const { articleID } = useParams<{ articleID: string }>();
  const [needToRefetch, setNeedToRefetch] = useState(false);
  const contextUserID = useContext(GlobalContext).user?.id;
  const [isLiked, setIsLiked] = useState<boolean>();
  const [likeArticle] = useMutation(LIKE_ARTICLE);
  const [getArticleDetails, { data, refetch, called }] = useLazyQuery(
    GET_ONE_BY_ID,
    {
      variables: {
        articleID: articleID,
      },
      pollInterval: 250,
    }
  );

  useEffect(() => {
    getArticleDetails({
      variables: {
        articleID: articleID,
      },
    });
  }, [needToRefetch]);

  useEffect(() => {
    data &&
      setIsLiked(
        data.oneArticle.likesArticle.some(
          (like: Articles_articles_likesArticle) =>
            like.user.userID === contextUserID
        )
      );
  }, [data]);

  const switchLike = async () => {
    try {
      setIsLiked(!isLiked);
      await likeArticle({
        variables: {
          articleID: articleID,
        },
      });
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <div className="lg:p-10 space-y-5 flex justify-center">
      <section className="p-1 w-3/4 max-w-screen-lg">
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
                <span className="font-bold">Dev</span>
                &nbsp;# Javascript
              </div>
            </div>
          </div>
          <div className="leading-3 flex flex-col md:flex-row items-center text-xl">
            <span onClick={() => switchLike()} className="cursor-pointer">
              {data && data.oneArticle.likesArticle.length}&nbsp;
              <i className={`fas fa-heart ${isLiked && 'text-red-500'}`}></i>
              &nbsp;
            </span>
            <span>
              {data?.oneArticle?.commentairesArticle.length}&nbsp;
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
              <img className="rounded-md mx-auto my-5" alt="" />
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
      <CommentContainer
        articleID={articleID}
        comments={data?.oneArticle?.commentairesArticle}
        needToRefetch={needToRefetch}
        setNeedToRefetch={setNeedToRefetch}
      />
    </div>
  );
}
