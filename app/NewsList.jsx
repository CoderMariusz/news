import Article from './Article';

function NewsList({ news }) {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-5'>
      {news?.data.map((article) => (
        <Article
          key={article.title}
          article={article}
        />
      ))}
    </main>
  );
}

export default NewsList;
