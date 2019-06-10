import styled, { css } from "styled-components";

// export const StyledLink = styled(Link)`
//     color: blue;
//     font-weight: bold;
// `;

export const AppStyle = styled.div`
    color: blue;
`;

export const HeaderWrapper = styled.div`
    max-width: 100%;
    background: #ffffff;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;

    /* Mobile Styles */
    @media only screen and (max-width: 400px) {
        flex-flow: row wrap;
        ul,
        li {
            display: block;
            margin: 0 auto;
        }
        .title {
            flex-basis: 100%;
            text-align: center;
        }
        .menu {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
        }

        .link-menu {
            font-size: 1.25em;
            text-align: center;
        }
    }

    .title,
    .title:visited,
    .title:active {
        font-size: 1.5em;
        text-decoration: none;
        font-weight: 600;
        color: #3b413c;
    }

    .menu {
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
        padding: 0 16px;
    }

    .link-menu {
        color: #3b413c;
        display: block;
        margin-left: 0.5em;
        text-decoration: none;
        padding-right: 16px;
    }

    .link-menu::after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        background: #000;
        transition: width 0.2s;
    }
    .link-menu:hover::after {
        width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center center;
    transition: all 0.9s ease-out;
    opacity: 1;

    :hover {
        opacity: 0.5;
    }
`;

export const ImgCart = styled(Img)`
    width: 200px;
    height: 200px;
`;

export const Button = styled.button`

    display: flex;
    margin: 1rem auto;
    padding: 0.75em 1em;
    text-decoration: none;

    :hover {
        border-color: ${(props) => props.secondary && `#5e635f`}
        pointer: cursor;
    }

    ${(props) =>
        props.primary &&
        css`
            border: 1px solid #5e635f;
            background-color: #5e635f;
            color: white;
            width: auto;
            text-decoration: none;
            display: flex;
            align-items: center;
        `};

    ${(props) =>
        props.secondary &&
        css`
            background: none;
            padding: 0.5rem;
            border: 1px solid #dddddd;
            transition: all 0.3s ease-in-out;
            color: #2f2f2f;
            align-self: flex-end;
        `};

    ${(props) =>
        props.large &&
        css`
            padding: 0.75em 1em;
        `};
`;

export const MainBox = styled.div`
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: flex-start;
`;

export const CartPaginationWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 0;

    ${"" /* button, button: visited, button: active {
        padding: 0.75em 1em;
        border-radius: 5px;
        border: 1px solid #9db5b2;
        background-color: #9db5b2;
        color: white;
        width: auto;
        text-decoration: none;
        display: flex;
        align-items: center;
    } */}

    @media only screen and (max-width: 480px) {
        display: block;

        button {
            font-size: 1em;
            margin: 0.5em 1em 0.5em 0;
        }
    }
`;

export const CartLayout = styled.div`
    display: grid;
    margin: 1rem 0;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 64px;
    grid-template-areas: "cart-grid-a cart-grid-b";
    justify-content: space-evenly;

    .cart-grid-a {
        grid-area: cart-grid-a;
    }

    .cart-grid-b {
        grid-area: cart-grid-b;
    }

    @media only screen and (max-width: 480px) {
        display: block;
    }
`;

export const FooterContainer = styled.div`
    margin: 2em;
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "footer-grid-a footer-grid-b footer-grid-c";
    align-items: flex-start;
    line-height: 2.5em;
    background-color: #ede8e1;

    .footer-grid-a {
        grid-area: footer-grid-a;
    }
    .footer-grid-b {
        grid-area: footer-grid-b;
    }
    .footer-grid-c {
        grid-area: footer-grid-c;
    }

    @media (max-width: 600px) {
        display: block;
        margin: 0 auto;

        .footer-grid-a,
        .footer-grid-b,
        .footer-grid-c {
            margin: 2em auto;
        }
    }
`;

export const AboutGrid = styled.div`
    display: grid;
    margin: 3em auto;
    padding-right: 80px;
    grid-template-columns: 40% 60%;
    grid-column-gap: 32px;
    grid-template-areas: "about-grid-a about-grid-b";
    align-items: center;

    .about-grid-a {
        grid-area: about-grid-a;
    }

    .about-grid-b {
        grid-area: about-grid-b;
    }

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center center;
    }

    @media (max-width: 600px) {
        grid-template-columns: 0 1fr;
        .about-grid-a {
            display: none;
        }
    }
`;

export const ThankYouContainer = styled.div`
    margin: 0 auto;
    padding: 0 120px;
    text-align: center;
    line-height: 2em;
    p {
        font-size: 2em;
    }

    img {
        width: auto;
        height: 300px;
        object-fit: cover;
    }
`;

export const MainCover = styled.div`
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    margin: 0;
    clear: both;

    background-size: cover;
    background-position: center;
    background-image: url(/header-cover.jpg);
    background-image: image-set(
        url(/header-cover-sm.jpg) 1x,
        url(/header-cover.jpg) 2x
    );

    @media (max-width: 600px) {
        background-image: url(/header-cover-sm.jpg);
        padding: 2em;
    }
`;
