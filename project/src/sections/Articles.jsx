import { articles } from "../constants";
import { ArticleCard } from "../components";

const Articles = () => {
  return (
    <div
      id="blog"
      className="container pt-[6em] pb-[10em] max-md:pt-[3em] max-md:pb-[5em]"
    >
      <h1 className="font-publicSans text-3xl text-dark-blue mb-11 max-md:text-center">
        Latest Articles
      </h1>
      <div className="flex gap-7 max-md:flex-col">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            img={article.img}
            author={article.author}
            heading={article.heading}
            text={article.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
