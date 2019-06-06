import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Summary from "./Summary";
import Checkout from "./Checkout";
import { Heading } from "grommet";
import { ImgCart, CartLayout } from "../styles/style.js";
import "../styles/index.css";

class Cart extends Component {
    displayOrder = (key) => {
        // the key is the name of the object
        const inventory = this.props.inventory[key];
        const count = this.props.cart[key];
        console.log("this is plant " + inventory);
        console.log("this is key " + key);
        console.log("this is count " + count);

        return (
            <li key={key} className="cart-item">
                <ImgCart src={inventory.image} />
                <span className="cart-item-desc">
                    {inventory.name} : {count}
                </span>
            </li>
        );
    };

    render() {
        // an object of all our orders, returns object name
        const orderKeys = Object.keys(this.props.cart);
        const { cart, inventory } = this.props;

        return (
            <div className="wrap">
                <Heading level="1">Checkout</Heading>

                <CartLayout>
                    <div className="cart-grid-a">
                        {orderKeys.length > 0 ? (
                            <ul>
                                {orderKeys.map((key) => this.displayOrder(key))}
                            </ul>
                        ) : (
                            "The cart is empty."
                        )}

                        <button>Back</button>
                        <Link to="/checkout">
                            <button className="btn_checkout">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                    <div className="cart-grid-b">
                        <Summary cart={cart} inventory={inventory} />
                    </div>
                </CartLayout>
            </div>
        );
    }
}

export default Cart;
