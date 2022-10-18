import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewsApi = () => {

    const [news, setNews] = useState([])
    const navigate = useNavigate()

    let getNews = () => {
        axios
        .get("https://newsapi.org/v2/everything?q=tesla&from=2022-09-17&sortBy=publishedAt&apiKey=29cc8aa970f04080b0961bdd9af978b6")
        .then(res=>setNews(res.data.articles))
        .catch((err) => {
            console.log(err);
        })
    }

    console.log('news==========>', news);



    useEffect(()=>{
        getNews()
    }, [])

  return (
    <>
    {
    news.map((e,i)=><h3 className='dataT'> <span className='span'>AUTHOR </span> <br /> {e.author} 
        <br />
        
        <button >
            readMore
        </button>
       
        </h3>)
        }
    </>
  )
}

export default NewsApi