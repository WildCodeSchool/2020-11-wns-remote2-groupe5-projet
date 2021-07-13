import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import HomePage from './HomePage';
import {
  GET_ALL_ARTICLES,
  SUBSCRIBE_TO_NEW_COMMENT,
} from '../../queries/article-queries';
import { Articles_articles } from '../../schemaTypes';

const GET_ARTICLES_SUCCESS_MOCK = {
  request: {
    query: GET_ALL_ARTICLES,
  },
  result: {
    data: {
      articles: [
        {
          id: '1',
          commentairesArticles: [
            {
              user: {
                avatarFileName: '7.jpg',
                userID: '7',
                __typename: 'User',
              },
            },
          ],
          community: {
            communityID: '1',
            community: 'design',
            __typename: 'Community',
          },
          contentFields: [
            {
              content: 'salut',
              contentType: 'Titre',
              placeNumber: 0,
              __typename: 'ContentField',
            },
            {
              content: 'la foliie',
              contentType: 'Paragraphe',
              placeNumber: 1,
              __typename: 'ContentField',
            },
          ],
          date: '2021-07-01T13:21:31.448Z',
          description: 'la foliie',
          likesArticles: [
            {
              likeID: '3',
              user: {
                userID: '13',
                __typename: 'User',
              },
              __typename: 'LikeArticle',
            },
          ],
          title: 'salut',
          user: {
            avatarFileName: '7.jpg',
            pseudo: 'mikeee',
            __typename: 'User',
          },
        },
      ],
    },
  },
};

const GET_ARTICLES_ERROR_MOCK = {
  request: {
    query: GET_ALL_ARTICLES,
  },
  error: new Error('Server error.'),
};

const SUBSCRIBE_TO_NEW_COMMENT_MOCK_NO_DATA_RECEIVED = {
  request: {
    query: SUBSCRIBE_TO_NEW_COMMENT,
  },
  result: {},
};

const SUBSCRIBE_TO_NEW_COMMENT_MOCK_DATA_RECEIVED = {
  request: {
    query: SUBSCRIBE_TO_NEW_COMMENT,
  },
  result: {
    data: {
      subscribeToNewComment: {
        commentaire: 'eee',
        contentFieldID: '27',
        date: '2021-07-12T13:23:15.138Z',
        user: {
          avatarFileName: '7.jpg',
          pseudo: 'mikeee',
          userID: '7',
          __typename: 'User',
        },
      },
    },
  },
};

const renderArticleList = (
  mocks: MockedResponse<Record<string, unknown>>[]
) => {
  render(
    <MockedProvider mocks={mocks}>
      <HomePage />
    </MockedProvider>
  );
};

describe('ArticleList', () => {
  describe('rendering articles list', () => {
    describe('after fetching', () => {
      describe('if no new article received', () => {
        it('renders articles list', async () => {
          renderArticleList([
            GET_ARTICLES_SUCCESS_MOCK,
            SUBSCRIBE_TO_NEW_COMMENT_MOCK_DATA_RECEIVED,
          ]);
          const list = await waitFor(() => screen.getByRole('articlesList'));
          const listItems = within(list).getAllByRole('articleItem');

          expect(listItems).toHaveLength(1);
          expect(listItems[0]).toHaveTextContent('salut');
        });
      });
    });
  });
});
