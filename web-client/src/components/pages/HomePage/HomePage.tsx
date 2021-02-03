import React from 'react';
import data from '../../../data-samples/articles-journal.json';
import { ReactComponent as IconArrow } from '../../../assets/icons/icon_arrow.svg';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';

export default function HomePage(): JSX.Element {
  return (
    <div className="lg:p-10 bg-gray-300 space-y-5 flex flex-col items-center justify-center">
      {data.map((article) => (
        <ArticleCard key={article.articleID} {...article} />
      ))}
    </div>
  );
}
