import React, { Component } from "react";
import "./Header.css";
import { HeaderWrapper } from "./style.js";

import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Link to="/" className="title">
                    Green Studio
                </Link>

                <div className="menu">
                    <Link to="/cart" className="link-menu">
                        Cart{" "}
                    </Link>
                    <Link to="/account" className="link-menu">
                        Account{" "}
                    </Link>
                </div>
            </HeaderWrapper>
        );
    }
}

export default Header;
