import React from "react";
import { Link } from "react-router-dom";
import { CartPaginationWrap } from "../styles/style.js";
import { MdKeyboardArrowRight } from "react-icons/md";

function CartPagination(props) {
    const { back, forward, label } = props;

    return (
        <CartPaginationWrap>
            <li>
                <Link to={back}>
                    <button className="secondary">Back</button>
                </Link>
            </li>

            <li>
                <Link to={forward}>
                    <button className="btn_checkout">
                        {label}
                        <MdKeyboardArrowRight size={24} />
                    </button>
                </Link>
            </li>
        </CartPaginationWrap>
    );
}

export default CartPagination;
