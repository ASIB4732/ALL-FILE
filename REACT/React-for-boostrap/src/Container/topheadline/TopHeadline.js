import React, { useEffect } from 'react';
import { useState } from 'react';
import News from '../news/News';

const TopHeadline = () => {
    const [articles, setartical]=useState([])
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=6aa953b69fab431385d8832730b30696")
        .then(res=>res.json())
        .then(data=>setartical(data.articles))
    },[])
    return (
        <div>
            <h2>Top headline: {articles.length}</h2>
            
            {
                articles.map(articles=><News 
                    articles1={articles.title}
                    articles2={articles.description}
                    
                    ></News>)
            }
            <News></News>
            
        </div>
    );
};

export default TopHeadline;