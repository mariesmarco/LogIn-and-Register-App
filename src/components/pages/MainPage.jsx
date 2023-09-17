import React, { useState } from "react";
import ReactDOM from "react-dom";
import Footer from "../Footer";
import ShowDate from "../ShowDate";
import Input from "../Input";
import favouriteFood from "../../favouriteFood";
import LogInForm from "../forms/LogInForm";

function MainPage() {
    const [foodNameInput, setFoodNameInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [imageSrcInput, setImageSrcInput] = useState("");
    const [favouriteFoodList, setFavouriteFoodList] = useState(favouriteFood);

    function handleFoodNameChange(event) {
        setFoodNameInput(event.target.value);
    }

    function handlePriceChange(event) {
        setPriceInput(event.target.value);
    }

    function handleImageSrcChange(event) {
        setImageSrcInput(event.target.value);
    }

    function addFoodElement() {
        if (foodNameInput && priceInput && imageSrcInput) {
            setFavouriteFoodList((prevValue) => [
                ...prevValue,
                {
                    name: foodNameInput,
                    price: priceInput,
                    imageSrc: imageSrcInput,
                },
            ]);

            // Clear the input fields
            setFoodNameInput("");
            setPriceInput("");
            setImageSrcInput("");
        } else {
            // You can add error handling here, e.g., show an error message to the user
            alert("Please fill in all fields.");
        }
    }

    return (
        <div className="container">
            <h1>My Favorite Foods</h1>
            <Input
                value={foodNameInput}
                onChange={handleFoodNameChange}
                type="text"
                placeholder="Food name"
            />
            <Input
                value={priceInput}
                onChange={handlePriceChange}
                type="text"
                placeholder="Price"
            />
            <Input
                value={imageSrcInput}
                onChange={handleImageSrcChange}
                type="text"
                placeholder="Image source"
            />
            <button onClick={addFoodElement} className="button">
                Add New Food
            </button>
            <ul className="food-list">
                <div className="container">
                    {/* {favouriteFoodList.map((food, index) => (
                        <div className="container" key={index}>
                            <h3>{food.name}</h3>
                            <p>{food.price}</p>
                            <img className="image" src={food.imageSrc} alt={food.name} />
                        </div>
                    ))} */}
                </div>
            </ul>
            <button onClick={() => { ReactDOM.render(<LogInForm />, document.getElementById("root")) }} className="button">Log Out</button>
            <ShowDate />
            <Footer />
        </div>
    );
}

export default MainPage;
