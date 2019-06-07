import React from "react";
import { Link } from "react-router-dom";
import { ThankYouContainer } from "../styles/style.js";

function ThankYou() {
    return (
        <ThankYouContainer>
            <img src="/terrarium.jpeg" alt="image of a terrarium" />

            <p>
                Thank you for your purchase. Your dummy-receipt and
                dummy-tracking number will be sent to your email in a few
                moments. We hope to find you back here at Green Studio🌿.
            </p>

            <p>
                <Link to="/">Back to homepage</Link>
            </p>
        </ThankYouContainer>
    );
}

export default ThankYou;
