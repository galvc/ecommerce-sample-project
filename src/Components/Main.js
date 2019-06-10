import React, { Component } from "react";
import Plant from "./Plant";
import Footer from "./Footer";
import { MainBox, AboutGrid, MainCover } from "../styles/style.js";
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
                {/* <Box
                    background="url(/header-cover.jpeg)"
                    height="medium"
                    align="center"
                    responsive="true"
                    pad="large"
                > */}
                <MainCover>
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
                    {/* </Box> */}
                </MainCover>

                <AboutGrid>
                    <div className="about-grid-a">
                        <img
                            src="/plants-about.jpeg"
                            alt="cover for about-plants"
                        />
                    </div>
                    <div className="about-grid-b">
                        <Heading level="2">What is Green Studio</Heading>
                        <p>
                            Green Studio encourages you to grow your indoor
                            plant garden by offering plant starters that are
                            great for beginners and those without green thumbs.
                            Take a look and shop around.{" "}
                        </p>
                        <em>
                            Image taken from{" "}
                            <a href="https://unsplash.com/photos/ZchXTnNWCOM">
                                Unsplash
                            </a>
                        </em>
                    </div>
                </AboutGrid>

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

                <Footer />
            </div>
        );
    }
}

export default Main;
