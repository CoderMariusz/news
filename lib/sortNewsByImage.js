export default function sortNewsByImage(news) {
  const newsWithImage = news.filter((article) => article.image !== null);
  const newsWithoutImage = news.filter((article) => article.image === null);

  const sortedNews = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage]
  };

  return sortedNews;
}
