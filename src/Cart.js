import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
    displayOrder = (key) => {
        // the key is the name of the object
        const plant = this.props.plants[key];
        const count = this.props.cart[key];
        console.log("this is plant " + plant);
        console.log("this is key " + key);
        console.log("this is count " + count);
        return (
            <li key={key}>
                {plant.name} : {count}
            </li>
        );
    };

    render() {
        // an object of all our orders
        const orderKeys = Object.keys(this.props.cart);

        // this will display an object of plant names
        return (
            <div>
                <ul>{orderKeys.map((key) => this.displayOrder(key))}</ul>

                <Link to="/checkout">
                    <button> Proceed to Checkout </button>
                </Link>
            </div>
        );
    }
}

export default Cart;
