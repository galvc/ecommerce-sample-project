import React, { Component } from "react";
import { ImgCart } from "../styles/style.js";

class PreviewCart extends Component {
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
        return (
            <div>
                {this.props.orderKeys.length > 0 ? (
                    <ul>
                        {this.props.orderKeys.map((key) =>
                            this.displayOrder(key)
                        )}
                    </ul>
                ) : (
                    "The cart is empty."
                )}
            </div>
        );
    }
}

export default PreviewCart;
