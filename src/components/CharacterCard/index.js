import React from 'react';
import './style.css';

const CharacterCard = ({ id, name, image, description, handleUserPicks }) => (
    <div className='col-3 card-cols'>
        <div
            className="card w-100"
            key={id}
            data-id={id}
            name={name}
            style={{ width: '18rem' }}
        >
            <div
                className='card-body'
                onClick={handleUserPicks}
                data-id={id}
                name={name}
            >
                <img className='card-img-top' src={image} alt={name}
                    data-id={id}
                    name={name} />
                <p className='card-text text-center'
                    data-id={id}
                    name={name} >
                    <strong
                        data-id={id}
                        name={name}>- The {name} -
                    </strong>
                    <hr />
                    <em
                        data-id={id}
                        name={name}>"{description}"
                    </em>
                </p>
            </div>
        </div>
    </div>
)

export default CharacterCard;