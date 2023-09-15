import React from "react";
export default FoodElement;

function FoodElement(props) {
    return (
        <div className="food-element">
            <div className="food-element__image">
                <img src={props.image} alt="food" />
            </div>
            <div className="food-element__info">
                <div className="food-element__name">{props.name}</div>
                <div className="food-element__price">{props.price}</div>
            </div>
        </div>
    );
}
