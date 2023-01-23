import React, { useState, useEffect} from 'react'
import "./Navbar.css"

function Navbar() {


    //For showing navbar when scrolling down from banner
    const [show, handleShow] = useState(false);
    const transitionNavbar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        //cleanup
        return () => window.removeEventListener("scroll", transitionNavbar)
        
    }, [])


  return (
    <div className={`nav  ${show && "nav_black"}`}>

        <div className="nav_content">
            
        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />

        <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>

        
        
    </div>
  )
}

export default Navbar