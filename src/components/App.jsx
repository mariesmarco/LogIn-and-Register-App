import React from "react";
import ReactDOM from "react-dom";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LogInForm";
export default App;

function isRegistered() {
    ReactDOM.render(<LogInForm />, document.getElementById('root'));
}

function App() {

    return (<div className="container">
        <RegisterForm />
        <button onClick={isRegistered}>Do you have an account already?</button>
    </div>);
}