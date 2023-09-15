import React from "react";
import ReactDOM from "react-dom";
import Heading from "../Heading";
import Input from "../Input";
import accounts from "../../AccountsList";
import RegisterForm from "./RegisterForm";
import Footer from "../Footer";
import ShowDate from "../ShowDate";
import MainPage from "../MainPage";
export default LogInForm;

function LogInForm() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isMouseOverLogIn, setMouseOverLogIn] = React.useState(false);
    const [isMouseOverRegister, setMouseOverRegister] = React.useState(false);

    function handleUsernameChange(event) {
        var inputUsername = event.target.value;
        setUsername(inputUsername);
    }

    function handlePasswordChange(event) {
        var inputPassword = event.target.value;
        setPassword(inputPassword);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const isUsernameTaken = accounts.some((account) => account.username === username);
        const isPasswordCorrect = accounts.some((account) => account.password === password);
        if (isUsernameTaken && isPasswordCorrect) {
            alert("Log in successful!");
            ReactDOM.render(<MainPage />, document.getElementById('root'));
        } else if (!isUsernameTaken) {
            alert("Username is not registered.");
        } else if (!isPasswordCorrect) {
            alert("Password is incorrect.");
        } else {
            alert("Please fill in all fields.");
        }
    }

    function loadRegisterForm(event) {
        event.preventDefault();
        ReactDOM.render(<RegisterForm />, document.getElementById('root'));
    }

    function handleMouseOver(event) {
        if (event.target.name === "login") {
            setMouseOverLogIn(true)
        } else {
            setMouseOverRegister(true)
        }
    }

    function handleMouseOut(event) {
        if (event.target.name === "login") {
            setMouseOverLogIn(false);
        }
        else {
            setMouseOverRegister(false);
        }
    }

    return (
        <div className="container" id="container" >
            <Heading headingText="Log In" />
            <form className="form">
                <div className="form-group">
                    <Input onChange={handleUsernameChange} type="text" placeholder="Username" value={username} />
                </div>
                <div className="form-group">
                    <Input onChange={handlePasswordChange} type="password" placeholder="Password" value={password} />
                </div>
                <div className="form-group">
                    <button
                        name="login"
                        type="submit"
                        className="submit-button"
                        style={{ backgroundColor: isMouseOverLogIn ? "#FAECEA" : "white" }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleSubmit}
                    >Log In</button>
                    <button
                        name="register"
                        type="submit"
                        className="submit-button"
                        style={{ backgroundColor: isMouseOverRegister ? "#FAECEA" : "white" }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={loadRegisterForm}>Register</button>
                </div>
            </form >
            <Footer />
            <ShowDate />
        </div >
    );
}