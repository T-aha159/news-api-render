import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Render = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [newsData,setNewsData]=useState('')
  useEffect(() => {
    setNewsData(location.state)
  }, [])


  const back = ()=>{
    navigate('/dashboard/data')
  }
  
    console.log(newsData)
  return (
    <div className='div'>
    
      {/* <img src={newsData.urlToImage} alt="SomeIMAGE" />
    <h2>{newsData.title}</h2>
    <p>
      {newsData.body}
    </p> */}

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={newsData.urlToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {newsData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={()=>back()}>Go To Back</Button>
      </CardActions>
    </Card>

    </div>
  )
}

export default Render