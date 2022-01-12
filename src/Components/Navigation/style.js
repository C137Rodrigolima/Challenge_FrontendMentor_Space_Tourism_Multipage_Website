import styled from "styled-components";

const BoxNavigation = styled.div `
    height: 96px;
    width: 100%;
    margin-top: 40px;
    padding-left: 55px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
`;

const Nav = styled.div `
    height: 96px;
    width: 830px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
`;

const StyledNavButton = styled.div`
    height: 96px;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;

    color: #FFFFFF;

    :hover{
        border-bottom: 3px solid #FFFFFF;
        opacity: 0.5;
    }
`;

export {BoxNavigation, Nav, StyledNavButton};