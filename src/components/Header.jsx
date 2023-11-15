import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrap>
            <Title>BLACKPINK FAN-LETTER</Title>
            <Tabmenu>
                <Tab>Jenny</Tab>
                <Tab>Rose</Tab>
                <Tab>Lisa</Tab>
                <Tab>Jisoo</Tab>
            </Tabmenu>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`
    width: 100%;
    height: 100vh;
    text-align: center;
    border-bottom: 1px solid black;
    background: url("https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iK1.u6oUF6FE/v0/1600x800.jpg") rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
`;

const Title = styled.h1`
    font-size: 64px;
    margin: 20px 0;
`;

const Tabmenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    margin: 0 auto;
    font-size: 24px;
    /* border-bottom: 1px solid #eee; */
`;

const Tab = styled.li`
    padding: 4px 24px;
    font-size: 24px;
    border: 1px solid ${({ clicked }) => (clicked ? "white" : "none")};
    cursor: pointer;
`;

export default Header;
