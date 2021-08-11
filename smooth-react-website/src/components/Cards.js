import React from 'react'
import CardItem from './CardItem';
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out EPIC Destinations!</h1>
            <div className="cards container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="./public/images/img-9.jpg"
                        text="Explore the hidden WaterFall"
                        label="Advanture"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
