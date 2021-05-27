import React, {useState, useEffect} from 'react';
import downArrow from '../images/misc/arrow.png'

export default function Header() {
    const [menuLinksData, setMenuLinksData] = useState([]);
    const loadMenuLinksData = async()=>{
      const response = await fetch('https://orbll81bq7.execute-api.us-east-2.amazonaws.com/Production/menuLinks');
      let data = await response.json();
      setMenuLinksData(data);
    }

    useEffect(()=>{
      //Load the Menu Links data from API
      loadMenuLinksData();
    }, []);
    return (
        <header id="intro">
        <article class="fullheight">
          <div class="hgroup">
            <h1>Landon Hotel</h1>
            <h2>West London</h2>
            <p><a href="#welcome"><img src={downArrow} alt="down arrow" /></a></p>
          </div>
        </article>

        <nav id="nav">
          <div class="navbar">
            <div class="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
            <ul>
                {menuLinksData.map((menuLink)=>{
                    return (<li><a className={`info ${menuLink.class}`} href={menuLink.href}><span>{menuLink.text}</span></a></li>)
                })}
            </ul>
          </div>
        </nav>
      </header>
    )
}