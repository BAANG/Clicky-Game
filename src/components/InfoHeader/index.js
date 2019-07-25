import React from 'react';
import './style.css';

function InfoHeader() {
    return (
        <div 
            className="row"
            id="info-header">
            <div
                className="col-4 user-info">
                    {/* Title */}
            </div>
            <div
                className="col-4 user-info">
                    {/* Instructions/Alert */}
            </div>
            <div
                className="col-4 user-info">
                    {/* Score */}
            </div>
        </div>
    )
}

export default InfoHeader;