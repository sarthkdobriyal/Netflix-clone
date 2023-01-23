import React from 'react'
import "./Banner.css"

function Banner() {

    //to truncate the description if too long
    function truncate(string, n){
        return string.length > n?string.substring(0,n-1)+"...":string
    }


  return (
    <header className='banner' style={{
        backgroundImage:`url("https://wallpapercave.com/wp/wp8741529.jpg")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
    }}>

        <div className="banner__contents">
            <h1 className="banner__title">
                Movie Name
            </h1>
            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 class="banner__description">{
                truncate(`this is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is `, 150)
            }</h1>
        </div>


        <div className="banner--fadeBottom" />
            
    </header>
  )
}

export default Banner