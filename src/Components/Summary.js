import React, { Component } from "react";
import { Heading } from "grommet";

class Summary extends Component {
    //adds the total number of all purchases regardless of item
    //IMPROVEMENT: lift this function up to App so that the header can use
    //the count number
    totalCount = (orderKeys) => {
        // var total = [];
        // orderKeys.map((key) => {
        //     total.push(this.props.cart[key]);
        // });

        var total = orderKeys.map((key) => {
            return this.props.cart[key];
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

    displayList = (key) => {
        // the key is the name of the object
        const inventory = this.props.inventory[key];
        const count = this.props.cart[key];

        return (
            <li key={key} className="li__summary-list">
                ({count}) {inventory.name}
            </li>
        );
    };
    render() {
        const orderKeys = Object.keys(this.props.cart);
        const count = this.totalCount(orderKeys);
        const subtotal = this.subtotal(orderKeys);
        return (
            <div>
                <section className="summary-items-list">
                    <p>Items in Cart:</p>
                    {orderKeys.length > 0 ? (
                        <ul>{orderKeys.map((key) => this.displayList(key))}</ul>
                    ) : (
                        ""
                    )}
                </section>
                <p>Total Items: {count} </p>
                <Heading level="4">Subtotal ${subtotal}</Heading>
                <p />
            </div>
        );
    }
}

export default Summary;
