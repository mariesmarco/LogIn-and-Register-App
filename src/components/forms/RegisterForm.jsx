import React from "react";
import ReactDOM from "react-dom";
import Heading from "../Heading";
import LogInForm from "./LogInForm";
import accounts from "../../AccountsList";
import ShowDate from "../ShowDate";

export default RegisterForm;

function RegisterForm(props) {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [isMouseOverRegister, setMouseOverRegister] = React.useState(false);
    const [isMouseOverHaveAccount, setMouseOverHaveAccount] = React.useState(false);

    function handleUsernameChange(event) {
        var inputUsername = event.target.value;
        setUsername(inputUsername);
    }

    function handlePasswordChange(event) {
        var inputPassword = event.target.value;
        setPassword(inputPassword);
    }

    function handleConfirmPasswordChange(event) {
        var inputConfirmPassword = event.target.value;
        setConfirmPassword(inputConfirmPassword);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (password === confirmPassword) {
            const isUsernameTaken = accounts.some((account) => account.username === username);
            if (isUsernameTaken) {
                alert("Username is already taken.");
            } else if (username === "" || password === "" || confirmPassword === "") {
                alert("Please fill in all fields.")
                setUsername("");
                setPassword("");
                setConfirmPassword("");
            } else if (password.length < 8 || confirmPassword.length < 8) {
                alert("Password must be at least 8 characters long.");
                setPassword("");
                setConfirmPassword("");
            }
            else {
                alert("Registration successful!");
                accounts.push({ username: username, password: password });
                ReactDOM.render(<LogInForm />, document.getElementById('root'));
            }
        } else if (password !== confirmPassword) {
            alert("Passwords do not match.");
            setPassword("");
            setConfirmPassword("");
        }
    }

    function isRegistered() {
        ReactDOM.render(<LogInForm />, document.getElementById('root'));

    }

    function handleMouseOver(event) {
        if (event.target.name === "register") {
            setMouseOverRegister(true)
        } else {
            setMouseOverHaveAccount(true)
        }
    }

    function handleMouseOut(event) {
        if (event.target.name === "register") {
            setMouseOverRegister(false);
        }
        else {
            setMouseOverHaveAccount(false);
        }
    }

    return (
        <div className="container">
            <Heading headingText="Register" />
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={handleUsernameChange} type="text" className="form-input" placeholder="Username" value={username} />
                </div>
                <div className="form-group">
                    <input onChange={handlePasswordChange} type="password" className="form-input" placeholder="Password" value={password} />
                </div>
                <div className="form-group">
                    <input onChange={handleConfirmPasswordChange} type="password" className="form-input" placeholder="Confirm Password" value={confirmPassword} />
                    <button
                        name="register"
                        type="submit"
                        className="submit-button"
                        style={{ backgroundColor: isMouseOverRegister ? "#FAECEA" : "white" }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >Register</button>
                    <button
                        name="another account"
                        type="submit"
                        className="submit-button"
                        style={{ backgroundColor: isMouseOverHaveAccount ? "#FAECEA" : "white" }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={isRegistered}>Do you have an account already?</button>
                </div>
            </form>
            <ShowDate />
        </div>
    );
}
