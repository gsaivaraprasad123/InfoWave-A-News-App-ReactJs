import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {
  let apikey = "your api key"
  let [articles, setArticles] = useState([])
  let [category, setCategory] = useState("india")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-23&apiKey=${apikey}`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [category])

  return (
    <div className="App">
      <header className='header'>
        <h2>InfoWave</h2>
        <input type="text" placeholder='Search News' onChange={(event) => {
          if (event.target.value !== "") {
            setCategory(event.target.value)
          }
          else {
            setCategory("india")
          }
        }} />
      </header>
      <section className='news-articles'>

        {
          articles.length !== 0 ?

            articles.map((article) => {
              return (
                <News article={article}></News>
              )
            })
            :
            <h2>No News Found for Search </h2>
        }

      </section>
    </div>
  );
}

export default App;
