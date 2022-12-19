import { gql } from 'graphql-request';
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (category, keywords, isDynamic) => {
  //grafQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          image
          description
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  //fetch function
  const res = await fetch(
    'https://lebanon.stepzen.net/api/jazzy-cheetah/__graphql',
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords
        }
      })
    }
  );
  console.log('loading categories'), category, keywords;

  const newRes = await res.json();
  //sort function by image

  const sortedNews = sortNewsByImage(newRes.data.myQuery.data);

  //return data

  return sortedNews;
};
export default fetchNews;
