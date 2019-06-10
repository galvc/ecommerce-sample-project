import React, { Component } from "react";
import Summary from "./Summary";
import { Heading } from "grommet";
import { CartLayout, CartItem } from "../styles/style.js";
import CartPagination from "./CartPagination";
import "../styles/index.scss";

class Cart extends Component {
    displayOrder = (key) => {
        // the key is the name of the object
        const inventory = this.props.inventory[key];
        const count = this.props.cart[key];
        console.log("this is plant " + inventory);
        console.log("this is key " + key);
        console.log("this is count " + count);
        var thumbnail = inventory.thumb + " 1x";
        return (
            <CartItem key={key}>
                <img
                    src={inventory.image}
                    alt="inventory item"
                    srcSet={thumbnail}
                />
                <span>
                    {inventory.name} : {count}
                </span>
            </CartItem>
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
                            <div>
                                <ul>
                                    {orderKeys.map((key) =>
                                        this.displayOrder(key)
                                    )}
                                </ul>
                                <CartPagination
                                    back="/"
                                    forward="/checkout"
                                    label="Proceed to Checkout"
                                />
                            </div>
                        ) : (
                            "Your cart is empty."
                        )}
                        <p />
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
