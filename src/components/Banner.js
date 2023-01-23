import instance from '../axios';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./Banner.css"
import requests from '../Requests';



function Banner() {

    const [movie, setMovie] = useState([]);

    async function fetchData(){
        const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
        )
        return request;
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(movie)

    //to truncate the description if too long
    function truncate(string, n){
        return string.length > n?string.substring(0,n-1)+"...":string
    }


  return (
    <header className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
    }}>

        <div className="banner__contents">
            <h1 className="banner__title">
                {movie.name}
            </h1>
            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className="banner__description">{
                truncate(`${movie.overview} `, 150)
            }</h1>
        </div>


        <div className="banner--fadeBottom" />
            
    </header>
  )
}

export default Banner