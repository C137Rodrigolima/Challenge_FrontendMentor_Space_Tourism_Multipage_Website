import styled from "styled-components";

const BoxHome = styled.div `
    height: 100vh;
    width: 100%;
    padding-top: 251px;
    display: flex;
    justify-content: center;
    align-items: bottom;
    gap: 386px;
    box-sizing: border-box;

    background-color: cornflowerblue;
`;

const BoxContent = styled.div `
    width: 450px;
    height: 382px;

    h1{
        font-family: Bellefair;
        font-style: normal;
        font-weight: normal;
        font-size: 150px;
        line-height: 172px;

        color: #FFFFFF;
    }

    h5{
        font-family: Barlow Condensed;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.725px;

        color: #D0D6F9;
    }

    h6{
        font-family: Barlow;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;

        color: #D0D6F9;
    }
`;

const StyledExploreButton = styled.button `
    all: unset;
    width: 274px;
    height: 274px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;

    color: #0B0D17;

    border-radius: 50%;
    background-color: #FFFFFF;
`;

export {BoxHome, BoxContent, StyledExploreButton};