import React, { Component } from "react";
import sampleInventory from "../sample-inventory";
import Account from "./Account";
import Header from "./Header";
import Cart from "./Cart";
import Main from "./Main";
import Checkout from "./Checkout";
import Payment from "./Payment";
import ThankYou from "./ThankYou";
// import { AppStyle } from "./style.js";
import { Route, Link } from "react-router-dom";

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
        //cart[key] is # of items for particular item
        //key is object name ex plant4
        //this.state.inventory[key] is an object
        //this.state.inventory[key].price returns the price of that object

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
            <div>
                {/* <Account account={this.state.account} /> */}
                {/* the screen changes within the div */}
                <Header />
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
                            inventory={this.state.inventory}
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

                <Route
                    path="/checkout"
                    render={(props) => (
                        <Checkout
                            {...props}
                            cart={this.state.cart}
                            inventory={this.state.inventory}
                        />
                    )}
                />

                <Route
                    path="/payment"
                    render={(props) => (
                        <Payment
                            {...props}
                            cart={this.state.cart}
                            inventory={this.state.inventory}
                        />
                    )}
                />

                <Route path="/thank-you" component={ThankYou} />
            </div>
        );
    }
}

export default App;
