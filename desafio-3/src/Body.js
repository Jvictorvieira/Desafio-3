import React from "react";
import "./Style.css"


function Body (value) {
    if (value ==='Home') {
        return (
            <div className='Container'>
                <h2 className='subtitle'>About us</h2>
                <p></p>
            </div>
        )
    } else if (value ==='Site') {
        return (
            <div className='Container'>
                <h2 className='subtitle'>Site Constitucional</h2>
                <p></p>
            </div>
        )   
    } else if (value ==='Consul') {
        return (
            <div className='Container'>
                <h2 className='subtitle'>Consultoria</h2>
                <p></p>
            </div>
        )   
    } else if (value==='Deliver') {
        return (
            <div className='Container'>
                <h2 className='subtitle'>Seed Delivery</h2>
                <p></p>
            </div>
        )   
    }  
}

export default Body;