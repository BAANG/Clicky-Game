import React from 'react';
import './style.css';
import bgAudio from '../Sounds/fftpubtheme.mp3'

function Footer() {
    return (
        <div
            id="footer">
            <div className='row'>
                <div
                    className="col-2 footer-info text-center">
                    <small>
                        Made by Christopher Celestino
                    </small>
                </div>
                <div
                    className="col-8 footer-info text-center">
                    <hr />
                    <p>
                        <small>
                            - How to Play: -
                    <br />This is a game of memory. Pick each card only once. If you select a card for a second time, you lose.
                    </small>
                    </p>
                    <hr />
                </div>
                <div
                    className="col-2 footer-info">
                    <audio src={bgAudio} controls autoPlay loop />
                </div>
            </div>
        </div>
    )
}

export default Footer;