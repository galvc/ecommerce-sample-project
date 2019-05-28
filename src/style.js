import styled from "styled-components";

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
    padding: 16px 16px;

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

    .title {
        font-size: 1.5em;
        text-decoration: none;
        font-weight: 600;
        color: #1c2e63;
    }

    .menu {
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
        padding: 0 16px;
    }

    .link-menu {
        color: #1c2e63;
        display: block;
        margin-left: 0.5em;
        text-decoration: none;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center center;
`;

export const Button = styled.button`
    background: none;
    padding: 0.5rem;
    border: 1px solid #dddddd;
    transition: all 0.3s ease-in-out;
    color: #2f2f2f;
    align-self: flex-end;

    &:hover {
        border: 1px solid #aaaaaa;
        transition: 0;
        color: black;
        cursor: pointer;
    }
`;

export const MainBox = styled.div`
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: flex-start;
`;
