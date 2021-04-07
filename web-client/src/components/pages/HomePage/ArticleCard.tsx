import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Articles_articles } from '../../../schemaTypes';
import ArticleActions from './ArticleActions';
import ArticleHeader from './ArticleHeader';

type ArticleCardProps = {
  article: Articles_articles;
};

export default function ArticleCard({
  article,
}: ArticleCardProps): JSX.Element {
  console.log('articleCard', article);
  return (
    <Box>
      <ArticleHeader article={article} />
      <article className="bg-white rounded-br-md rounded-bl-md md:flex">
        <div className="py-3 w-2/5 md:mx-2 mx-auto flex items-center">
          <img
            className="rounded-md mx-auto w-full"
            src={
              'https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png'
            }
            alt=""
          />
        </div>
        <div className="w-3/5 flex flex-col justify-between text-center">
          <div className="py-5 px-2 break-words">
            <h3 className="font-bold uppercase text-xl mb-3">
              {article.title}
            </h3>
            <p className="text-justify px-4">{article.description}</p>
          </div>
          <Link
            to={'articles/' + article.articleID}
            className="w-full md:w-1/4 self-end py-2 rounded-md md:rounded-tr-none md:rounded-bl-none bg-gray-800 text-white hover:bg-gray-600 font-semibold"
          >
            Lire la suite&nbsp;
            <i className="fas fa-arrow-right text-xl"></i>
          </Link>
        </div>
      </article>
    </Box>
  );
}
