import React from 'react';
import './style.css';

const CharacterCard = ({ id, name, image, description, handleUserPick }) => (
    <div className='col-3'>
        <div
            className="card"
            key={id}
            data-id={id}
            name={name}
            onClick={handleUserPick}
            style={{width: '18rem'}}
        >
            <div className='card-body'>
                <img className='card-img-top' src={image} alt={name} />
                <p className='card-text text-center'>
                <strong>- The {name} -</strong>
                <hr />
                <em>"{description}"</em>
                </p>
            </div>
        </div>
    </div>
)

export default CharacterCard;