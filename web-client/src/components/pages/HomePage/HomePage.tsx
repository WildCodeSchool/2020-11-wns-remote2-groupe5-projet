import React from 'react';
import ArticleCard from './ArticleCard';
import { GET_ALL_ARTICLES } from '../../../queries/article-queries';
import { useQuery } from '@apollo/client';
import { Articles_articles } from '../../../schemaTypes';

export default function HomePage(): JSX.Element {
  const { data } = useQuery(GET_ALL_ARTICLES, { fetchPolicy: 'no-cache' });
  console.log('HomePage - data', data);
  return (
    <div className="lg:p-10 bg-gray-300 space-y-5 flex flex-col items-center justify-center">
      {data &&
        data.articles.map((article: Articles_articles) => (
          <ArticleCard key={article.articleID} article={article} />
        ))}
    </div>
  );
}
