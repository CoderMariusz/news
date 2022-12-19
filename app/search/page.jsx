import fetchNews from '../../lib/fetchNews';
import NewsList from '../newsList';
async function SearchPage({ searchParams }) {
  const news = await fetchNews('general', searchParams.term, true);
  return (
    <div>
      <h1 className='headerTitle'>Search Results for: {searchParams.term}</h1>

      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
