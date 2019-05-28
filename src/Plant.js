import React, { Component } from "react";
import { Box, Heading } from "grommet";
import { Img, Button } from "./style.js";
import "./index.css";

class Item extends Component {
    addToCart = () => {
        this.props.addToCart(this.props.index);
    };

    removefromCart = () => {
        this.props.removefromCart(this.props.index);
    };

    delete = () => {
        this.props.delete(this.props.index);
    };

    render() {
        const { name, image, price, description, status } = this.props.details;

        return (
            <Box
                animation="slideDown"
                background="#D7F2BA"
                pad="small"
                margin="small"
                round="small"
                width="small"
                height="medium"
                responsive={true}
                basis="medium"
                overflow="visible"
            >
                <Img src={image} alt={name} />
                <section className="item-header">
                    <Heading level="4">{name}</Heading>
                    <span className="price">${price}</span>
                </section>

                <span className="description">{description}</span>

                <span className="cart-button">
                    <Button onClick={this.addToCart}> Purchase </Button>
                </span>

                {/* <Button onClick={this.removefromCart}>Minus</Button> */}
                {/* <Button onClick={this.delete}>Remove</Button> */}
            </Box>
        );
    }
}

export default Item;
