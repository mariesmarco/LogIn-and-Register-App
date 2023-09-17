import React from "react";
export default ShowDate;

function ShowDate() {
    return (
        <p>Today is {new Date().toLocaleDateString()}</p>
    );
}
