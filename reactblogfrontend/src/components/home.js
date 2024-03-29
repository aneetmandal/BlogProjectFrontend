import '../styles/blog.css';

import React from 'react';
import { Link } from "react-router-dom";
// import { useEffect } from 'react';

function Home(){

    // useEffect()

return(
    <>
    <div class="blog-structure">
    <div class="Mobile-Head">

        <div class="Mobilehead1">The</div>
        <div class="Mobilehead2">Siren</div>
    <div class="menu-icon">
        <div class="bar-1"></div>
        <div class="bar-2"></div>
        <div class="bar-3"></div>
    </div>
    </div>    
    <h1 class="head1">The</h1>
    <div class="head2">Siren</div>

    <div class='Mobile-Space'></div>

    <Link to ="/article"><div className='Home'><b>Home</b></div></Link>
    <div class="Home-Line"></div>
    <Link to ="/bollywood"><div class="Bollywood"><b>Bollywood</b></div></Link>
    <div class="Bollywood-Line"></div>
    <Link to ="/article"><div class="Tech"><b>Technology</b></div></Link>
    <div class="Tech-Line"></div>
    <Link to ="/article"><div class="Hollywood"><b>Hollywood</b></div></Link>
    <Link to ="/article"><div class="Fitness"><b>Fitness</b></div></Link>
    <Link to ="/article"><div class="Food"><b>Food</b></div></Link>
    <div class="hr-line"></div>
    <div class="Img1">
        <span id="TitleFont">
            Title of vertical gallery
        </span>
        <span id="SubTitleFont">
        Travel / February 27 2023
        </span>
    </div>
    <div class="Img2">
    <span id="Img2Font">
            The Sound Cloud<br /> you loved is doomed
        </span>
        <span id="Img2SubFont">
        Travel / February 27 2023
        </span>
    </div>
    <div class="Img3">
    <span id="Img3Font">
            The Sound Cloud<br /> you loved is doomed
        </span>
        <span id="Img3SubFont">
        Travel / February 27 2023
        </span>
    </div>

    <div class="Latest">The Latest</div>
    <div class="Latest-line"></div>

    <div class="LatestCard-1">
    <Link to ="/article"><div class="Temple-1"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="Temple-1-Text">Joshua Tree <br /> Overnight Adventure</div></Link>
        <div class="Temple-2-Text">Gujarat is vastly underrated and it’s a mystery
         to us why the region isn’t more well-known as a tourist destination. 
         It has a plethora of temples and palaces</div>
        <div class="Temple-Footer">Travel</div> 
        <div class="Temple-Footer-2">/ February 27 2023</div> 
    </div>

    <div class="LatestCard-2">
    <Link to ="/article"><div class="Temple-2"></div></Link>
        <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="Temple2-2-Text">Joshua Tree <br /> Overnight Adventure</div></Link>
        <div class="Temple-22-Text">Gujarat is vastly underrated and it’s a mystery
         to us why the region isn’t more well-known as a tourist destination. 
         It has a plethora of temples and palaces</div>
        <div class="Temple2-Footer">Travel</div> 
        <div class="Temple2-Footer-2">/ February 27 2023</div> 
    </div>

    <div class="LatestCard-3">
    <Link to ="/article"><div class="Temple-3"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="Temple3-Text">Joshua Tree <br /> Overnight Adventure</div></Link>
        <div class="Temple-33-Text">Gujarat is vastly underrated and it’s a mystery
         to us why the region isn’t more well-known as a tourist destination. 
         It has a plethora of temples and palaces</div>
         <div class="Temple3-Footer">Travel</div> 
        <div class="Temple3-Footer-3">/ February 27 2023</div> 
    </div>

    <div class="Latest-Article">Latest Articles</div>
    <div class="Latest-Article-Line"></div>
    <div class="Latest-Article-HR-Line"></div>

    <Link to ="/article"><div class="LA-P1"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="LA-P1-Head">Catch waves with an adventure guide</div></Link>
    <div class="LA-P1-Text">Gujarat is vastly underrated and it’s a mystery to us <span id="LA-P1-Mobile">why the region isn’t more well-</span></div>
    <div class="LA-P1-Foot">Travel</div>
    <div class="LA-P1-Foot-2">/ February 27 2023</div> 
    <div class="LA-P1-HR-Line"></div>

    <Link to ="/article"><div class="LA-P2"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="LA-P2-Head">Catch waves with an adventure guide</div></Link>
    <div class="LA-P2-Text">Gujarat is vastly underrated and it’s a mystery to us <span id="LA-P2-Mobile">why the region isn’t more well-</span></div>
    <div class="LA-P2-Foot">Travel</div>
    <div class="LA-P2-Foot-2">/ February 27 2023</div> 
    <div class="LA-P2-HR-Line"></div>

    <Link to ="/article"><div class="LA-P3"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="LA-P3-Head">Catch waves with an adventure guide</div></Link>
    <div class="LA-P3-Text">Gujarat is vastly underrated and it’s a mystery to us <span id="LA-P3-Mobile">why the region isn’t more well-</span></div>
    <div class="LA-P3-Foot">Travel</div>
    <div class="LA-P3-Foot-2">/ February 27 2023</div> 
    <div class="LA-P3-HR-Line"></div>

    <Link to ="/article"><div class="LA-P4"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="LA-P4-Head">Catch waves with an adventure guide</div></Link>
    <div class="LA-P4-Text">Gujarat is vastly underrated and it’s a mystery to us <span id="LA-P4-Mobile">why the region isn’t more well-</span></div>
    <div class="LA-P4-Foot">Travel</div>
    <div class="LA-P4-Foot-2">/ February 27 2023</div> 

    <div class="LoadArrow"></div>
    <div class="LoadText">Load More</div>

    <div class="Adv-Border"></div>
    <div class="Adv">Advertisement</div>

    <div class="Top-Posts">Top Posts</div>
    <div class="Top-Posts-Line"></div>

    <Link to ="/article"><div class="TP-Pic-1"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="TP-P1-Head">Catch waves with an adventure guide</div></Link>
    <div class="TP-P1-Foot">Travel</div>
    <div class="TP-P1-Foot-2">/ February 27 2023</div>
    <div class="TP-P1-1">1</div>
    <div class="TP-P1-HRLine"></div>

    <Link to ="/article"><div class="TP-Pic-2"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="TP-P2-Head">Catch waves with an<br /> adventure guide</div></Link>
    <div class="TP-P2-Foot">Travel</div>
    <div class="TP-P2-Foot-2">/ February 27 2023</div>
    <div class="TP-P2-2">2</div>
    <div class="TP-P2-HRLine"></div>

    <Link to ="/article"><div class="TP-Pic-3"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="TP-P3-Head">Catch waves with an<br /> adventure guide</div></Link>
    <div class="TP-P3-Foot">Travel</div>
    <div class="TP-P3-Foot-2">/ February 27 2023</div>
    <div class="TP-P3-3">3</div>
    <div class="TP-P3-HRLine"></div>

    <Link to ="/article"><div class="TP-Pic-4"></div></Link>
    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="TP-P4-Head">Catch waves with an<br /> adventure guide</div></Link>
    <div class="TP-P4-Foot">Travel</div>
    <div class="TP-P4-Foot-2">/ February 27 2023</div>
    <div class="TP-P4-4">4</div>

    <div class="TP-Max">
        <span id="TPFont">
            Title of vertical gallery
        </span>
        <span id="TPSubFont">
        Travel / February 27 2023
        </span>
    </div>

    <div class="Latest-Stories">Latest Stories</div>
    <div class="Latest-Stories-Line"></div>
    <div class="Latest-Stories-HRLine"></div>

    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="LS-H1">Catch waves with an adventure guide</div></Link>
    <div class="LS-T1">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination.
     It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</div>
    <div class="LS-F1-1">TECH</div>
    <div class="LS-F1-2">/ TODAY AT 11:54</div>
    <div class="LS-HR-1"></div>

    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="LS-H2">Catch waves with an adventure guide</div></Link>
    <div class="LS-T2">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination.
     It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</div>
    <div class="LS-F2-1">STYLE</div>
    <div class="LS-F2-2">/ MARCH 02 2023</div>
    <div class="LS-HR-2"></div>

    <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class="LS-H3">Catch waves with an adventure guide</div></Link>
    <div class="LS-T3">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination.
     It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</div>
    <div class="LS-F3-1">TECH</div>
    <div class="LS-F3-2">/ MARCH 02 2023</div>
    <div class="LS-HR-3"></div>

    <div class="Latest-Stories-HRLine-2"></div>

    <div class="ViewArrow"></div>
    <Link to ="/article"><div class="ViewText">VIEW MORE</div></Link>

    </div>
    </>
);
}


export default Home;