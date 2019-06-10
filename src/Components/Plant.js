import React, { Component } from "react";
import { Box, Heading } from "grommet";
import { Img, Button } from "../styles/style.js";
import "../styles/index.scss";

//index is key passed from the map in main.js
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
        var imagelarge = this.props.details.imagelarge + " 2x";
        return (
            <Box
                animation="slideDown"
                background="white"
                pad="small"
                margin="small"
                round="small"
                width="small"
                height="500px"
                responsive={true}
                basis="medium"
                overflow="visible"
            >
                <Img src={image} alt={name} srcset={imagelarge} />

                <section className="item-header">
                    <Heading level="4" color="#254D32">
                        {name}
                    </Heading>
                    <span className="price">${price}</span>
                </section>

                <span className="description">{description}</span>

                <span className="cart-button">
                    {status === "sold out" ? (
                        <Button disabled>Sold out</Button>
                    ) : (
                        <Button secondary onClick={this.addToCart}>
                            {" "}
                            Purchase{" "}
                        </Button>
                    )}
                </span>

                {/* <Button onClick={this.removefromCart}>Minus</Button> */}
                {/* <Button onClick={this.delete}>Remove</Button> */}
            </Box>
        );
    }
}

export default Item;
