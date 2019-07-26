import React from 'react';
import './style.css';

const CharacterCard = ({ id, name, image, description, handleUserPick }) => (
    <div>
        <div
        className = "card"
        key = {id}
        data-id = {id}
        name = {name}
        image = {{ backgroundImage: `url(${image}`}}
        description = {description}
        onClick = {handleUserPick}>
        </div>
    </div>
)

export default CharacterCard;