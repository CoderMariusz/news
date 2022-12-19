import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import categories from '../constants';

async function page() {
  const news = await fetchNews(categories.join(','));
  return <div>{news && <NewsList news={news} />}</div>;
}

export default page;
