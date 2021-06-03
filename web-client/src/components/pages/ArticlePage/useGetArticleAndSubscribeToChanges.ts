import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  OneArticle,
  SubscribeToNewComment,
} from '../../../schemaTypes';
import {
  GET_ONE_BY_ID,
  IS_LIKED_ARTICLE,
  SUBSCRIBE_TO_NEW_COMMENT,

  SWITCH_LIKE_ARTICLE,
} from '../../../queries/article-queries';

export const useGetArticleAndSubscribeToChanges = (
  userID: string | undefined,
  articleID: string
): {
  article: OneArticle | undefined;
  isLiked: boolean;
  switchLikeArticle: () => void;
} => {
  const requestParam = {
    variables: {
      articleID,
    },
  };

  const { data: article, subscribeToMore, refetch } = useQuery<OneArticle>(
    GET_ONE_BY_ID,
    requestParam
  );
  const {data: isLikedArticle} = useQuery(IS_LIKED_ARTICLE, requestParam)
  const [switchLikeArticleQuery] = useMutation(SWITCH_LIKE_ARTICLE);

  const [isSubscribedToNewChanges, setIsSubscribedToNewChanges] = useState(false);
  const [isLiked, setIsLiked] = useState<boolean>(isLikedArticle?.isLikeArticle!);


  const switchLikeArticle = async () => {
    try {
      const res = await switchLikeArticleQuery(requestParam);
      if (res) setIsLiked(!isLiked)
      refetch()
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(()=> {
    if(isLikedArticle) setIsLiked(isLikedArticle?.isLikeArticle!)
  }, [isLikedArticle])


  useEffect(() => {
    if (!isSubscribedToNewChanges) {
      subscribeToMore<SubscribeToNewComment>({
        document: SUBSCRIBE_TO_NEW_COMMENT,
        updateQuery: (prev, { subscriptionData }): OneArticle => {
          if (!subscriptionData.data) return prev;
          return {
            oneArticle: {
              ...prev.oneArticle,
              commentairesArticle: [
                ...prev.oneArticle.commentairesArticle,
                subscriptionData.data.subscribeToNewComment,
              ],
            },
          };
        },
      });

      setIsSubscribedToNewChanges(true);
    }
  }, [article]);

  return { article, isLiked, switchLikeArticle };
};
