import React from "react";
import { FooterContainer } from "../styles/style.js";

function Footer() {
    return (
        <FooterContainer>
            <div className="footer-grid-a">
                <strong>Green Studio</strong>
                <p>Shopping website for your indoor plant needs.</p>
                <p>
                    You can find the source code for this project{" "}
                    <a
                        href="https://github.com/galvc/ecommerce-sample-project"
                        alt="github link to this project"
                    >
                        here
                    </a>
                </p>
            </div>
            <div className="footer-grid-b">
                <strong>Contact Information</strong> <br />
                <em>Address:</em> 1111 Madeup St.
                <br />
                City, State
                <br />
                90000
                <br />
                <p />
                <em>Email:</em> hello@greenstudio-demo.com
            </div>
            <div className="footer-grid-c">
                <strong>
                    Made with{" "}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>
                    by
                </strong>
                <br />
                Chelsea G, designer & developer <br />
                Take a look at my{" "}
                <a
                    href="http://www.chelseagalvez.com"
                    alt="Chelsea G Portfolio Link"
                >
                    portfolio
                </a>
                <p>
                    <a href="http://github.com/galvc">Github</a>,{" "}
                    <a href="http://linkedin.com/in/galvc">LinkedIn</a>
                </p>
            </div>
        </FooterContainer>
    );
}

export default Footer;
