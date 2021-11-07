import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import News from './compunenta/card/News';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [articles, setArticles]=useState([])
  useEffect(() => {
   const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=6aa953b69fab431385d8832730b30696"
   axios(url)
   .then(data=>{

     setArticles(data.data.articles)
    })
  }, [])
  return (
    <div>
        <Button color="primary">Hello World</Button>
        <Button variant="contained" color="secondary">
         Secondary
         </Button>
         <h2>articles number: {articles.length}</h2>
         {
           articles.map(data=><News 
            articles={data.title}
            articles2={data.img}
            articles3={data.description}
            articles4={data.url}
            ></News>)
         }

    </div>
  );
}

export default App;
