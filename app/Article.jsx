import React from 'react';
import LifeTimeStamp from './LifeTimeStamp';
import ReadButton from './ReadButton';

function Article({ article }) {
  return (
    <article
      className='bg-slate-100 dark:bg-slate-800 flex flex-col
    rounded-lg shadow hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-300 ease-out'>
      {article.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.image}
          alt={article.title}
          className='h-48 w-full object-cover rounded-t-lg shadow-md'
        />
      )}
      <div className='flex flex-1 flex-col'>
        <div className='flex flex-1 flex-col p-5'>
          <h2 className='font-bold font-serif'>{article.title}</h2>
          <section className='flex-1 mt-2'>
            <p className='text-xs line-clamp-3'>{article.description}</p>
          </section>
          <footer className='text-xs text-right ml-auto space-x-1 pt-5 italic text-gray-400'>
            <p>{article.source}</p>
            <p>
              <LifeTimeStamp time={article.published_at} />
            </p>
          </footer>
        </div>
        <ReadButton article={article} />
      </div>
    </article>
  );
}

export default Article;
