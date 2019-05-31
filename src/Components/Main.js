import React, { Component } from "react";
import Plant from "./Plant";
import { MainBox } from "../styles/style.js";
import { Box, Heading } from "grommet";

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
            <div>
                <Box
                    background="url(/header-cover.jpeg)"
                    height="medium"
                    align="center"
                    responsive="true"
                    pad="large"
                >
                    {/* the styles need to be customized further */}
                    <Heading level="1" size="xlarge" color="#F6F8EC">
                        Green Studio
                    </Heading>
                    <Heading
                        level="3"
                        color="#F6F8EC"
                        margin={{ top: "medium" }}
                    >
                        Find your plant companion here.
                    </Heading>
                </Box>
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
            </div>
        );
    }
}

export default Main;
