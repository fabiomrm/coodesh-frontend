import styled from "styled-components";

export const Overlay = styled.div`
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`

    position: relative;
    align-items: center;
    background: white;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    width: 500px;
    ;
    position: relative;
    z-index: 100;

    & div.image-wrapper {
        width: 80px;
        height: 80px;
        background-color: #CCC;
        border-radius: 100%;
        position: absolute;
        top: -20%;
        left: 50%;
        margin-left: -40px;
    }

    div.image-wrapper img {
        position: absolute;
        top: 20%;
        right: 20%;
        border-radius: 100%;
        object-fit: contain;
    }

    & div.button-wrapper {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
    }

    div.button-wrapper button {
        border: none;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const Body = styled.div`
    margin: 2.75rem 0;
    padding: 0 2rem;

    & div.url-wrapper {
        text-align: center;
        border-bottom: 1px solid #000;
    }

    & h2 {
        padding: 0.25rem;
        text-align: center;
    }

    & p, span {
        font-size: 14px;
    }

    & p {
        padding: .5rem;
    }

    & span.border {
        border: 1px solid #CCC;
        background: #F6F6F6;
        padding: 0.1rem 0.25rem;
        border-radius: 5px;
    }

`;
