import React from "react";
import ReactDOM from "react-dom";
import LogInForm from "../forms/LogInForm";
import RegisterForm from "../forms/RegisterForm";
import MainPage from "./MainPage";
import Footer from "../Footer";
import ShowDate from "../ShowDate";
export default IntroPage;

function setLogInForm() {
    ReactDOM.render(<LogInForm />, document.getElementById('root'));
}
function setRegisterForm() {
    ReactDOM.render(<RegisterForm />, document.getElementById('root'));
}

function IntroPage() {
    return (<div className="container">
        <h1>Welcome stranger!</h1>
        <h2>Choose if you want to register or log in into your account.</h2>
        <div className="form-group">
            <button onClick={setLogInForm} className="submit-button">Log In</button>
            <button onClick={setRegisterForm} className="submit-button">Register</button>
            <Footer />
            <ShowDate />
            {ReactDOM.render(<MainPage />, document.getElementById('root'))}
        </div>
        <ShowDate />
        <Footer />
    </div>);
}
