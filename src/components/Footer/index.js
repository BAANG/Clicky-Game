import React from 'react';
import './style.css';

function Footer() {
    return (
        <div
            id="footer">
            <div className='row'>
                <div
                    className="col-2 footer-info text-center">
                    Made by Christopher Celestino
                </div>
                <div
                    className="col-8 footer-info text-center">
                    <p>
                    <small>
                            Directions:
                    <br />This is a game of memory. Pick each card only once. If you select a card for a second time, you lose.
                    </small>
                    </p>
                </div>
                <div
                    className="col-2">

                </div>
            </div>
        </div>
    )
}

export default Footer;