import React from 'react'

const CharacterCard = ({ item }) => {
    return (
        <div className="card">
            <img src={item.img}/>
            <h2>{item.name}</h2>

            <div className="card__footer">
                <p>Card Details</p>
            </div>
        </div>
    )
}

export default CharacterCard;