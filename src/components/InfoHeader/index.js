import React from 'react';
import './style.css';

function InfoHeader(props) {
    return (
        <div 
            className="row"
            id="info-header">
            <div
                className="col-2 offset-2 user-info text-center">
                    - Final Fantasy Tactics -
                    <br />Memory Game
            </div>
            <div
                className="col-8 user-info text-center">
                    <hr />
                   <span id='info-msg'>{props.message}</span>
                   <hr />
            </div>
            <div
                className="col-2 user-info text-center">
                    Score: {props.score} | Hi-Score: {props.hiScore}
                    
            </div>
        </div>
    )
}

export default InfoHeader;