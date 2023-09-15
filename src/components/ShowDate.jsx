import React from "react";
import ReactDOM from "react-dom";
export default ShowDate;

function ShowDate() {
    return (
        <p>Today is {new Date().toLocaleDateString()}</p>
    );
}
