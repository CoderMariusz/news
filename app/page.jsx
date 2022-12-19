import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import categories from '../constants';

async function page() {
  const categoriesArr = Array.from(categories);
  const news = await fetchNews(categoriesArr.join(','));
  return <div>{news && <NewsList news={news} />}</div>;
}

export default page;
