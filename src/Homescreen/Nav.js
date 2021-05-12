import React, {useState, useEffect} from 'react';
import "./Nav.css";

function Nav() {
    
    const[show,setShow]=useState(false);

    const transistionNavBar=()=> {
        if (window.scrollY > 100) {
           setShow(true);
        } else {
            setShow(false);
        }
    }

useEffect(()=>{
    window.addEventListener("scroll",transistionNavBar);
    return() => window.removeEventListener("scroll",transistionNavBar)
},[]);

    return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_content">
        <img className="nav_logo"
           src ="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
           alt ="Netflix LOGO" 
           />

         <img className="nav_avatar"
         src = "https://toppng.com/public/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png"
         alt="Netflix Avatar"
         
         />   
        </div>
    </div>
    );
}

export default Nav;
