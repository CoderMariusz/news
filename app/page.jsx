import fetchNews from '../lib/fetchNews';

async function page() {
  const news = await fetchNews(categories.join(','));
  return <div>homepage</div>;
}

export default page;
