import React, { Component } from "react";
import Summary from "./Summary";
import { Heading } from "grommet";
import { Link } from "react-router-dom";
import { CartLayout } from "../styles/style.js";
import "../styles/index.css";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

class Payment extends Component {
    render() {
        const { cart, inventory } = this.props;
        console.log("this is cart props " + cart);
        return (
            <div className="wrap">
                <Heading level="1">Payment Information</Heading>
                <CartLayout>
                    <div className="cart-grid-a">
                        <Heading level="5">Payment Methods</Heading>
                        <select className="select__pymt-wrap">
                            <option>Choose a Payment Method</option>
                            <option>Credit Card</option>
                        </select>
                        <div className="select__caret" />
                        <Heading level="3">Credit Card Information</Heading>

                        <form>
                            <input placeholder="Enter name on your card" />

                            <input placeholder="Enter your card number" />

                            <div className="label__select-wrapper">
                                <label>Month</label>
                                <select>
                                    <option>Jan</option>
                                </select>
                                <div className="select__caret">
                                    <MdKeyboardArrowDown size={24} />
                                </div>
                            </div>
                            <div className="label__select-wrapper">
                                <label>Year</label>
                                <select>
                                    <option>2020</option>
                                </select>
                                <div className="select__caret">
                                    <MdKeyboardArrowDown size={24} />
                                </div>
                            </div>

                            <input placeholder="CVV" className="input_small" />
                            <input
                                placeholder="Zip code"
                                className="input_small"
                            />
                        </form>
                    </div>
                    <Link to="/thank-you">
                        <button className="btn_checkout">
                            Finish Checkout
                            <MdKeyboardArrowRight size={24} />
                        </button>
                    </Link>

                    <div className="cart-grid-b">
                        <Summary cart={cart} inventory={inventory} />
                    </div>
                </CartLayout>
            </div>
        );
    }
}

export default Payment;
