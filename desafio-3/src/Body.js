import React from "react";
import "./Style.css"


function Body (value) {
    if (value ==='Home') {
        return (
            <div className='Container'>
                <div>
                    <h2 className='subtitle'>About us</h2>
                    <p></p>
                </div>
                <img></img>
            </div>
        )
    } else if (value ==='Site') {
        return (
            <div className='Container'>
                <div>
                    <h2 className='subtitle'>Site Constitucional</h2>
                    <p></p>
                </div>
                <img></img>
            </div>
        )   
    } else if (value ==='Consul') {
        return (
            <div className='Container'>
                <div>
                    <h2 className='subtitle'>Consultoria</h2>
                    <p></p>
                </div>
                <img></img>
            </div>
        )   
    } else if (value==='App') {
        return (
            <div className='Container'>
                <div>
                    <h2 className='subtitle'>Seed app</h2>
                    <p></p>
                </div>
                <img></img>
            </div>
        )   
    }  
}

export default Body;