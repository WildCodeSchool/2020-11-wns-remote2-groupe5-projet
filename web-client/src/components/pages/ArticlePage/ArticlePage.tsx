import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import ContentFields from './ContentFields';
import { parseDateArticle } from '../../../utils/Date';
import {
  LikeArticle,
  NewComment,
  NewLike,
  OneArticle,
  RemoveLike,
} from '../../../schemaTypes';
import CommentContainer from './Comment/CommentContainer';
import {
  DISLIKE_ARTICLE,
  GET_ONE_BY_ID,
  LIKE_ARTICLE,
  SUBSCRIBE_TO_NEW_COMMENT,
  SUBSCRIBE_TO_NEW_LIKE,
  SUBSCRIBE_TO_REMOVE_LIKE,
} from '../../../queries/article-queries';
import './ArticlePage.css';
import GlobalContext from '../../../utils/GlobalContext';

const useGetArticleAndSubscribeToChanges = (userID: string | undefined) => {
  const { articleID } = useParams<{ articleID: string }>();

  const { loading, error, data, subscribeToMore } = useQuery<OneArticle>(
    GET_ONE_BY_ID,
    {
      variables: {
        articleID,
      },
    }
  );

  const [isSubscribedToNewChanges, setIsSubscribedToNewChanges] = useState(
    false
  );

  useEffect(() => {
    if (!isSubscribedToNewChanges) {
      subscribeToMore<NewComment>({
        document: SUBSCRIBE_TO_NEW_COMMENT,
        updateQuery: (prev, { subscriptionData }): OneArticle => {
          console.log('ok1');
          if (!subscriptionData.data) return prev;
          return {
            oneArticle: {
              ...prev.oneArticle,
              commentairesArticle: [
                ...prev.oneArticle.commentairesArticle,
                subscriptionData.data.newComment,
              ],
            },
          };
        },
      });
      // subscribeToMore<NewLike>({
      //   document: SUBSCRIBE_TO_NEW_LIKE,
      //   updateQuery: (prev, { subscriptionData }): OneArticle => {
      //     console.log('ok2');
      //     if (!subscriptionData.data) return prev;
      //     return {
      //       oneArticle: {
      //         ...prev.oneArticle,
      //         likesArticle: [
      //           ...prev.oneArticle.likesArticle,
      //           subscriptionData.data.newLike,
      //         ],
      //       },
      //     };
      //   },
      // });
      // subscribeToMore<RemoveLike>({
      //   document: SUBSCRIBE_TO_REMOVE_LIKE,
      //   updateQuery: (prev, { subscriptionData }): OneArticle => {
      //     console.log('ok3');
      //     if (!subscriptionData.data) return prev;
      //     return {
      //       oneArticle: {
      //         ...prev.oneArticle,
      //         likesArticle: prev.oneArticle.likesArticle.filter(
      //           (like) => like.user.userID !== userID
      //         ),
      //       },
      //     };
      //   },
      // });

      setIsSubscribedToNewChanges(true);
    }
  }, [data]);

  return { loading, error, data };
};

export default function ArticlePage(): JSX.Element {
  const { articleID } = useParams<{ articleID: string }>();
  const userID = useContext(GlobalContext).user?.id;

  const [isLiked, setIsLiked] = useState<boolean>();

  const [likeArticle] = useMutation(LIKE_ARTICLE);
  const [dislikeArticle] = useMutation(DISLIKE_ARTICLE);

  const requestParam = {
    variables: {
      articleID,
    },
  };

  const { data } = useGetArticleAndSubscribeToChanges(userID);

  const switchLike = async () => {
    if (isLiked) {
      try {
        await dislikeArticle(requestParam);
      } catch (error) {
        console.log('ERROR', error);
      }
    } else {
      try {
        await likeArticle(requestParam);
      } catch (error) {
        console.log('ERROR', error);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setIsLiked(
        data.oneArticle.likesArticle.some((like) => like.user.userID === userID)
      );
    }
  }, [data]);

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
              <p className="text-justify px-4">
                {data?.oneArticle.description}
              </p>
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
      />
    </div>
  );
}
