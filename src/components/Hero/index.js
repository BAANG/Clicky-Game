import React from 'react';
import './style.css';

function Hero(props) {
    return (
        <div
            className="jumbotron jumbotron-fluid"
            id="hero">
                {props.children}
        </div>
    )
}

export default Hero;