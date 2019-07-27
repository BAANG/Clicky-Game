import React from 'react';
import './style.css';

function InfoHeader(props) {
    return (
        <div 
            className="row"
            id="info-header">
            <div
                className="col-4 user-info">
                    Made by Christopher Celestino
            </div>
            <div
                className="col-4 user-info">
                   {props.message}
            </div>
            <div
                className="col-4 user-info">
                    Score: {props.score} | Hi-Score: {props.hiScore}
            </div>
        </div>
    )
}

export default InfoHeader;