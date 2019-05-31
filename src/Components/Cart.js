import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PreviewCart from "./PreviewCart";
import ThankYou from "./ThankYou";
import { Heading } from "grommet";
import { CartLayout } from "../styles/style.js";
import "../styles/index.css";

class Cart extends Component {
    //adds the total number of all purchases regardless of item
    //IMPROVEMENT: lift this function up to App so that the header can use
    //the count number
    totalCount = (orderKeys) => {
        var total = [];
        orderKeys.map((key) => {
            total.push(this.props.cart[key]);
        });

        return total.reduce((prev, curr) => {
            return prev + curr;
        }, 0);
    };

    subtotal = (orderKeys) => {
        //orderKeys comes from cart
        //retrieve the price from plant
        //multiply with no of items in cart[key]
        //cross reference with cart[key] and plant name
        //orderKeys gives me ALL the object names, from CART
        //orderKeys[key] gives me one object name
        //inventory gives an object
        console.log("from subtotal" + orderKeys);
        const subtotal = orderKeys.reduce((prevTotal, key) => {
            const inventory = this.props.inventory[key];
            const cart = this.props.cart[key]; //gives quantity..
            //order
            // console.log("this is inventory[key] " + inventory[key]);
            //just give the inventory price
            return prevTotal + inventory.price * cart;
        }, 0);

        console.log("this is the subtotal " + subtotal);
        return subtotal;
    };

    render() {
        // an object of all our orders, returns object name
        const orderKeys = Object.keys(this.props.cart);
        const count = this.totalCount(orderKeys);
        const subtotal = this.subtotal(orderKeys);
        // this will display an object of plant names
        return (
            <div className="wrap">
                <Heading level="1">Checkout ({count})</Heading>

                <CartLayout>
                    <div className="preview-cart">
                        <PreviewCart
                            orderKeys={orderKeys}
                            inventory={this.props.inventory}
                            cart={this.props.cart}
                        />

                        <Link to="/thank-you">Thank You</Link>
                        <Switch>
                            <Route
                                exact
                                path="/preview-cart"
                                render={(props) => <PreviewCart {...props} />}
                            />
                            <Route path="/thank-you" component={ThankYou} />
                        </Switch>
                    </div>
                    <div className="checkout-summary">
                        <Heading level="4">Total Items: {count} </Heading>
                        <Heading level="2">Subtotal</Heading> $ {subtotal}
                        <p />
                        <Link to="/checkout">
                            <button> Proceed to Checkout </button>
                        </Link>
                    </div>
                </CartLayout>
            </div>
        );
    }
}

export default Cart;
