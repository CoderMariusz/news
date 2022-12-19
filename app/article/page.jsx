/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';
import LifeTimeStamp from '../LifeTimeStamp';
function ArticlePage({ searchParams }) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  return (
    <article>
      <section className='flex flex-col lg:flex-row pb-3'>
        <img
          className=' h-52 md:h-72 max-w-md 
            mx-auto  md:mx-lg lg-max-w-xl object-cover rounded-lg shadow-md'
          src={searchParams.image}
          alt={searchParams.title}
        />

        <div className='px-10'>
          <h1 className='headerTitle px-0 no-underline pb-2'>
            {searchParams.title}
          </h1>

          <div className='flex divide-x-2'>
            <h2 className='font-bold'>By: {searchParams.author}</h2>
            <h2 className='font-bold pl-4'>Source: {searchParams.source}</h2>
            <p className='pl-4'>
              <LifeTimeStamp time={searchParams.published_at} />
            </p>
          </div>
          <p className='pt-2'>{searchParams.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
