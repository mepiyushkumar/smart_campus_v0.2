import React, { Component } from 'react';  
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div className='container-fulid bg-black text-white'>

            <div className='row'>

                <div className='col-lg-12 py-3 m-6 h2 text-center'>
                    <NavLink to="/" style={{color:"white"}}>
                    {/*<img scr="./../public/home.webp" alt="home_logo" style={{height: 20, marginRight: 10}}/>*/}
                    Home</NavLink>
                </div>

            </div>
            
        </div>
        </>
    )
}

export default Navbar;