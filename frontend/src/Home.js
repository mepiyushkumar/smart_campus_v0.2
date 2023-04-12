import React from "react";
import { NavLink } from "react-router-dom";

function Home(){
    return(
        <>
            <div className="container-fuild bg-secondary" style={{height:"100vh" }}>
            <div className="row d-flex align-items-center" style={{ height: "100%" }}>
                
            <div className="col-sm-6">
            
            <div className="row  d-flex justify-content-center text-center">
            <NavLink to='/Detect'>
            <button type="button" className="btn btn-primary btn-lg">
            Detect
            </button>
            </NavLink>
            </div>
            </div>
            <div className="col-sm-6">
            
            <div className="row d-flex justify-content-center text-center">
            <NavLink to='/Table'>
            <button type="button" className="btn btn-primary btn-lg" >
            Logs
            </button>
            </NavLink>
            </div>
            </div>
            </div>
            </div>
            </>
            )
}

export default Home;