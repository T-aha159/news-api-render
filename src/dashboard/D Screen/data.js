import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Render from './render'

const AllData = () => {
    const [data, setData] = useState([])
    

const navigate=useNavigate()
    let getData = () => {
        axios
        .get("https://newsapi.org/v2/everything?q=tesla&from=2022-09-17&sortBy=publishedAt&apiKey=29cc8aa970f04080b0961bdd9af978b6")
        .then(res=>setData(res.data.articles))
        .catch((err) => {
            console.log(err);
        })
    }

    console.log('data==========>', data);
    const NavigationDataHandler=(data)=>{

        navigate('render',{
            state:data
          })
    }
    


    useEffect(()=>{
        getData()
    }, [])


  return (
    <>
    
    {
        data.map((e,i)=><h3 className='dataT'> <span className='span'>Title</span>{e.author} 
        <br />
        
        <button onClick={()=>NavigationDataHandler(e)}>
            readMore
        </button>
       
        </h3>)
    }
    </>

    
  )
}

export default AllData