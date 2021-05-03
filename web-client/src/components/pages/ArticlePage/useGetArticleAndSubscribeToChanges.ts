import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  OneArticle,
  SubscribeToNewComment,
  SubscribeToNewLike,
  SubscribeToRemoveLike,
} from '../../../schemaTypes';
import {
  GET_ONE_BY_ID,
  SUBSCRIBE_TO_NEW_COMMENT,
  SUBSCRIBE_TO_NEW_LIKE,
  SUBSCRIBE_TO_REMOVE_LIKE,
  SWITCH_LIKE_ARTICLE,
} from '../../../queries/article-queries';

export const useGetArticleAndSubscribeToChanges = (
  userID: string | undefined,
  articleID: string
): {
  data: OneArticle | undefined;
  isLiked: boolean;
  switchLikeArticle: () => void;
} => {
  const requestParam = {
    variables: {
      articleID,
    },
  };

  const { data, subscribeToMore } = useQuery<OneArticle>(
    GET_ONE_BY_ID,
    requestParam
  );

  const [isSubscribedToNewChanges, setIsSubscribedToNewChanges] = useState(
    false
  );

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const [switchLikeArticleQuery] = useMutation(SWITCH_LIKE_ARTICLE);

  const switchLikeArticle = async () => {
    try {
      await switchLikeArticleQuery(requestParam);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    if (data) {
      setIsLiked(
        data.oneArticle.likesArticle.some((like) => like.user.userID === userID)
      );
    }
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

      subscribeToMore<SubscribeToNewLike>({
        document: SUBSCRIBE_TO_NEW_LIKE,
        updateQuery: (prev, { subscriptionData }): OneArticle => {
          if (!subscriptionData.data) return prev;
          return {
            oneArticle: {
              ...prev.oneArticle,
              likesArticle: [
                ...prev.oneArticle.likesArticle,
                subscriptionData.data.subscribeToNewLike,
              ],
            },
          };
        },
      });

      subscribeToMore<SubscribeToRemoveLike>({
        document: SUBSCRIBE_TO_REMOVE_LIKE,
        updateQuery: (prev, { subscriptionData }): OneArticle => {
          if (!subscriptionData.data) return prev;
          return {
            oneArticle: {
              ...prev.oneArticle,
              likesArticle: [
                ...prev.oneArticle.likesArticle.filter(
                  (like) => like.user.userID !== userID
                ),
              ],
            },
          };
        },
      });

      setIsSubscribedToNewChanges(true);
    }
  }, [data]);

  return { data, isLiked, switchLikeArticle };
};
