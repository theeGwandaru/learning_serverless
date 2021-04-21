import React from 'react';
import menuLinksData from './data/menu_links.json';
import downArrow from '../images/misc/arrow.png'

export default function Header() {
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