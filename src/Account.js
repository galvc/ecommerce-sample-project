import React, { Component } from "react";

class Account extends Component {
    usernameRef = React.createRef();
    passwordRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        const update = {
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value,
            key: Date.now()
        };

        this.props.registerUser(update);
    };
    render() {
        console.log("this is username " + this.props.account.username);
        let username = this.props.account.username;
        return (
            <div>
                {username != null ? (
                    <p>Hello, {username} </p>
                ) : (
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            ref={this.usernameRef}
                        />
                        <input
                            name="password"
                            type="password"
                            ref={this.passwordRef}
                        />
                        <button type="submit">Register an Account</button>
                    </form>
                )}
                ;
            </div>
        );
    }
}

export default Account;
