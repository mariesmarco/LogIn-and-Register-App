import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import LogInForm from "./LogInForm";
import accounts from "../AccountsList";

export default RegisterForm;


function RegisterForm() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

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
                ReactDOM.render(<RegisterForm />, document.getElementById('root'));

            }
            else {
                alert("Registration successful!");
                accounts.push({ username: username, password: password });
                ReactDOM.render(<LogInForm />, document.getElementById('root'));



            }
        }
    }

    return (
        <div className="container">
            <Heading headingText="Register" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={handleUsernameChange} type="text" className="form-input" placeholder="Username" value={username} />
                </div>
                <div className="form-group">
                    <input onChange={handlePasswordChange} type="password" className="form-input" placeholder="Password" value={password} />
                </div>
                <div className="form-group">
                    <input onChange={handleConfirmPasswordChange} type="password" className="form-input" placeholder="Confirm Password" value={confirmPassword} />
                </div>



                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
}
