import React from "react";
import Heading from "./Heading";
import Input from "./Input";
export default LogInForm;

function LogInForm() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleUsernameChange(event) {
        var inputUsername = event.target.value;
        setUsername(inputUsername);

    }

    function handlePasswordChange(event) {
        var inputPassword = event.target.value;
        setPassword(inputPassword);

    }

    return (
        <div className="container-login" id="container-login" >
            <Heading headingText="Log In" />
            <form >
                <div className="form-group">
                    <Input onChange={handleUsernameChange} type="text" placeholder="Username" value={username} />
                </div>
                <div className="form-group">
                    <Input onChange={handleUsernameChange} type="password" placeholder="Password" value={password} />
                </div>
                <button type="submit" className="submit-button">Log In</button>
            </form>
        </div>
    );
}