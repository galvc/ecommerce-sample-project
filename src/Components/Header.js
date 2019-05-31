import React, { Component } from "react";
import "../styles/Header.css";
import { HeaderWrapper } from "../styles/style.js";

import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Link to="/" className="title">
                    Green Studio
                </Link>

                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/cart" className="link-menu">
                                Cart{" "}
                            </Link>
                        </li>

                        <li>
                            <Link to="/account" className="link-menu">
                                Account{" "}
                            </Link>
                        </li>
                    </ul>
                </div>
            </HeaderWrapper>
        );
    }
}

export default Header;
