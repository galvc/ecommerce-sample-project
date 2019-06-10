import React, { Component } from "react";
import Summary from "./Summary";
import CartPagination from "./CartPagination";
import { Heading } from "grommet";
import { CartLayout } from "../styles/style.js";
import "../styles/index.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

class Checkout extends Component {
    render() {
        const { cart, inventory } = this.props;
        console.log("this is cart props " + cart);
        return (
            <div className="wrap">
                <Heading level="1">Contact Information</Heading>
                <CartLayout>
                    <div className="cart-grid-a">
                        <form>
                            <input
                                placeholder="Enter your first name"
                                className="name"
                            />

                            <input
                                placeholder="Enter your last name"
                                className="name"
                            />

                            <input placeholder="Enter your email address" />

                            <input placeholder="Enter your phone number (optional) " />
                        </form>
                        <Heading level="3">Shipping Information</Heading>
                        <form>
                            <input placeholder="Enter your shipping address" />
                            <input placeholder="Apartment, suite, etc (optional)" />

                            <div className="label__select-wrapper">
                                <label>Country/Region</label>
                                <select>
                                    <option>United States</option>
                                </select>
                                <div className="select__caret">
                                    <MdKeyboardArrowDown size={24} />
                                </div>
                            </div>
                            <div className="label__select-wrapper">
                                <label>State</label>
                                <select>
                                    <option>Washington</option>
                                </select>
                                <div className="select__caret">
                                    <MdKeyboardArrowDown size={24} />
                                </div>
                            </div>

                            <input
                                placeholder="Zip code"
                                className="input_small"
                            />
                        </form>
                        <CartPagination
                            back="/cart"
                            forward="/payment"
                            label="Proceed to Payment"
                        />
                    </div>

                    <div className="cart-grid-b">
                        <Summary cart={cart} inventory={inventory} />
                    </div>
                </CartLayout>
            </div>
        );
    }
}

export default Checkout;
