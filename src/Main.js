import React, { Component } from "react";
import Plant from "./Plant";
import { MainBox } from "./style.js";

class Main extends Component {
    addToCart = (index) => {
        this.props.addToCart(index);
    };

    removefromCart = (index) => {
        this.props.removefromCart(index);
    };

    delete = (index) => {
        this.props.delete(index);
    };

    render() {
        return (
            <MainBox>
                {Object.keys(this.props.inventory).map((key) => {
                    return (
                        <Plant
                            key={key}
                            index={key}
                            details={this.props.inventory[key]}
                            addToCart={this.addToCart}
                            removefromCart={this.removefromCart}
                            delete={this.delete}
                        />
                    );
                })}
            </MainBox>
        );
    }
}

export default Main;
