import React from 'react';
import './style.css';

const CharacterCard = ({ id, name, image, handleUserPick }) => (
    <div>
        <div
        className = "card"
        key = {id}
        data-id = {id}
        name = {name}
        image = {{ backgroundImage: `url(${image}`}}
        onClick = {handleUserPick}>
        </div>
    </div>
)

export default CharacterCard;