import React from "react";
import { Link } from "react-router-dom";
import { CartPaginationWrap, Button } from "../styles/style.js";
import { MdKeyboardArrowRight } from "react-icons/md";

function CartPagination(props) {
    const { back, forward, label } = props;

    return (
        <CartPaginationWrap>
            <li>
                <Link to={back}>
                    <Button secondary large>
                        Back
                    </Button>
                </Link>
            </li>

            <li>
                <Link to={forward}>
                    <Button primary>
                        {label}
                        <MdKeyboardArrowRight size={24} />
                    </Button>
                </Link>
            </li>
        </CartPaginationWrap>
    );
}

export default CartPagination;
