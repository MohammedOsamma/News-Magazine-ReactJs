import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const api_key = "2aa30c36259d4055858ae937294e1bce";
    let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
    console.log(articles);
  }, [category]);
  return (
    <>
      <h2 className="text-center  my-3">
        Latest
        <span className="badge bg-danger"> News</span>
      </h2>
      <div className="container d-flex justify-content-center flex-wrap">
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </>
  );
};

export default NewsBoard;
