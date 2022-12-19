import React from 'react';
import fetchNews from '../../../lib/fetchNews';
import NewsList from '../../NewsList';
import categories from '../../../constants';

async function NewsCategory({ params }) {
  const news = await fetchNews(params.category, true);
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  const categoriesArr = Array.from(categories);
  return categoriesArr.map((category) => ({ category: { category } }));
}
