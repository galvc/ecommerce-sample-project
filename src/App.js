import React, { Component } from "react";
import sampleInventory from "./sample-inventory";
import Account from "./Account";
import Header from "./Header";
import Cart from "./Cart";
import Main from "./Main";
import Checkout from "./Checkout";
// import { AppStyle } from "./style.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Box, Grommet, Heading } from "grommet";

class App extends Component {
    constructor() {
        super();

        this.registerUser = this.registerUser.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removefromCart = this.removefromCart.bind(this);
        this.delete = this.delete.bind(this);
    }
    state = {
        cart: {},
        inventory: sampleInventory,
        account: {
            // username: {},
            // password: {}
        }
    };

    addToCart = (key) => {
        const cart = { ...this.state.cart };
        cart[key] = cart[key] + 1 || 1;
        this.setState({
            cart
        });
    };

    removefromCart = (key) => {
        const cart = { ...this.state.cart };
        if (cart[key] >= 0) {
            cart[key] = cart[key] - 1 || 1;
            this.setState({
                cart
            });
        }
    };

    delete = (key) => {
        const cart = { ...this.state.cart };
        cart[key] = 0;
        this.setState({
            cart
        });
    };
    registerUser = (account) => {
        this.setState({
            account
        });
    };

    // loadInventory = () => {
    //     this.setState({
    //         inventory: sampleInventory
    //     });
    // };

    render() {
        return (
            // <div className="App">
            <Grommet>
                <Header />
                {/* <Account account={this.state.account} /> */}
                {/* the screen changes within the div */}
                <Box
                    background="url(/header-cover.jpeg)"
                    height="medium"
                    alignContent="center"
                    responsive="true"
                >
                    {/* the styles need to be customized further */}
                    <Heading level="1" size="xlarge" textAlign="center">
                        Green Studio
                    </Heading>
                    <Heading level="3" textAlign="center">
                        Find your plant companion here.
                    </Heading>
                </Box>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <Main
                            {...props}
                            inventory={this.state.inventory}
                            addToCart={this.addToCart}
                            removefromCart={this.removefromCart}
                            delete={this.delete}
                        />
                    )}
                />

                {/* <Main
                        inventory={this.state.inventory}
                        addToCart={this.addToCart}
                    /> */}
                <Route
                    path="/cart"
                    render={(props) => (
                        <Cart
                            {...props}
                            cart={this.state.cart}
                            plants={this.state.inventory}
                        />
                    )}
                />
                <Route
                    path="/account"
                    render={(props) => (
                        <Account
                            {...props}
                            account={this.state.account}
                            registerUser={this.registerUser}
                        />
                    )}
                />

                <Route path="/checkout" render={(props) => <Checkout />} />
                {/* </div> */}
            </Grommet>
        );
    }
}

export default App;
