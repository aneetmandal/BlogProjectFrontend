import '../styles/bollywood.css';

import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";


class Bollywood extends Component{
    render(){
        return(
            <>
            <div className='Bollywood-Page'>

            <div className='B-Header-Section'>
           
            <div className='B-Heading-1'>The</div>
            <div className='B-Heading-2'>Siren</div>
          

            <div class="B-menu-icon">
        <div class="B-bar-1"></div>
        <div class="B-bar-2"></div>
        <div class="B-bar-3"></div>
            </div>
            </div>

            {/* <div className='B-Body-Section'> */}
            
            <Link to ="/article" style={{ textDecoration: 'none' }}><div className='B-Home'><b>Home</b></div></Link>
            <Link to ={"/bollywood"} style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class='B-Bollywood'>Bollywood</div></Link>
            <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div class='B-Technology'>Technology</div></Link>
            <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='B-Hollywood'>Hollywood</div></Link>
            <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='B-Fitness'>Fitness</div></Link>
            <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='B-Food'>Food</div></Link>
            <div className='B-Line'></div>
            
    <div className='B-Body-Section'>
            <div className='Bollywood-Section'>
                <div className='Bollywood-Header'>Bollywood</div>
                <div className='Bollywood-Header-Line'></div>

                <Link to ="/article"><div className='BW1-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BW1-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BW1-Text'>Gujarat is vastly underrated and it’s a mystery to us<span className='BW1-MobileText'> why the region isn’t more well-</span></div>
                <div className='BW1-Tag'>Travel</div>
                <div className='BW1-Date'>/ March 18 2023</div>
                <div className='BW1-HR-Line'></div>

                <Link to ="/article"><div className='BW2-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BW2-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BW2-Text'>Gujarat is vastly underrated and it’s a mystery to us<span className='BW2-MobileText'> why the region isn’t more well-</span></div>
                <div className='BW2-Tag'>Travel</div>
                <div className='BW2-Date'>/ March 18 2023</div>
                <div className='BW2-HR-Line'></div>

                <Link to ="/article"><div className='BW3-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BW3-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BW3-Text'>Gujarat is vastly underrated and it’s a mystery to us<span className='BW3-MobileText'> why the region isn’t more well-</span></div>
                <div className='BW3-Tag'>Travel</div>
                <div className='BW3-Date'>/ March 18 2023</div>
                <div className='BW3-HR-Line'></div>

                <Link to ="/article"><div className='BW4-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BW4-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BW4-Text'>Gujarat is vastly underrated and it’s a mystery to us<span className='BW4-MobileText'> why the region isn’t more well-</span></div>
                <div className='BW4-Tag'>Travel</div>
                <div className='BW4-Date'>/ March 18 2023</div>
                <div className='BW4-HR-Line'></div>

                <Link to ="/article"><div className='BW5-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BW5-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BW5-Text'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</div>
                <div className='BW5-Tag'>Travel</div>
                <div className='BW5-Date'>/ March 18 2023</div>
                <div className='BW5-HR-Line'></div>

                <Link to ="/article"><div className='BW6-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BW6-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BW6-Text'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</div>
                <div className='BW6-Tag'>Travel</div>
                <div className='BW6-Date'>/ March 18 2023</div>
                <div className='BW6-HR-Line'></div>

                <Link to ="/article"><div className='BW7-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BW7-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BW7-Text'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</div>
                <div className='BW7-Tag'>Travel</div>
                <div className='BW7-Date'>/ March 18 2023</div>
                
                <div className='B-Load-Arrow'></div>
                <div className='B-Load-More'>LOAD MORE</div>

            </div>

            <div className='B-Top-Section'>
                <div className='B-Top-Header'>Top Posts</div>
                <div className='B-Header-Line'></div>

                <Link to ={{pathname: "/article"}}><div className='BTP-1-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BTP-1-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BTP-1-Tag'>Travel</div>
                <div className='BTP-1-Time'>/ March 19 2023</div>
                <div className='BTP-1-1'>1</div>
                <div className='BTP-1-HR'></div>

                <Link to ="/article"><div className='BTP-2-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BTP-2-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BTP-2-Tag'>Travel</div>
                <div className='BTP-2-Time'>/ March 19 2023</div>
                <div className='BTP-2-2'>2</div>
                <div className='BTP-2-HR'></div>

                <Link to ="/article"><div className='BTP-3-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BTP-3-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BTP-3-Tag'>Travel</div>
                <div className='BTP-3-Time'>/ March 19 2023</div>
                <div className='BTP-3-3'>3</div>
                <div className='BTP-3-HR'></div>

                <Link to ="/article"><div className='BTP-4-Pic'></div></Link>
                <Link to ="/article" style={{ textDecoration: 'none' }} onClick={()=>{
        window.scrollTo(0,0);
    }}><div className='BTP-4-Head'>Catch waves with an adventure guide</div></Link>
                <div className='BTP-4-Tag'>Travel</div>
                <div className='BTP-4-Time'>/ March 19 2023</div>
                <div className='BTP-4-4'>4</div>
                <div className='BTP-4-HR'></div>

                <div class="B-Adv-Border"></div>
                <div class="B-Adv">Advertisement</div>

            </div>

            </div>

            </div>
            </>
        );
    }
}

export default Bollywood;