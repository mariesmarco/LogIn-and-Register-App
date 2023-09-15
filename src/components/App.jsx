import React from "react";
import IntroPage from "../IntroPage";
import Footer from "./Footer";
import ShowDate from "./ShowDate";
export default App;

function App() {
    return (<div className="container">
        <IntroPage />
        <Footer />
        <ShowDate />
    </div>);
}