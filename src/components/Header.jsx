import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Header = ({ member, setMember }) => {
    return (
        <>
            <HeaderWrap>
                <Title>BLACKPINK FAN-LETTER</Title>
            </HeaderWrap>
            <Tabmenu>
                <Tab
                    value={"Jenny"}
                    clicked={member === "Jenny"}
                    onClick={(event) => {
                        setMember(event.target.getAttribute("value"));
                    }}
                >
                    Jenny
                </Tab>
                <Tab
                    value={"Rose"}
                    clicked={member === "Rose"}
                    onClick={(event) => {
                        setMember(event.target.getAttribute("value"));
                    }}
                >
                    Rose
                </Tab>
                <Tab
                    value={"Lisa"}
                    clicked={member === "Lisa"}
                    onClick={(event) => {
                        setMember(event.target.getAttribute("value"));
                    }}
                >
                    Lisa
                </Tab>
                <Tab
                    value={"Jisoo"}
                    clicked={member === "Jisoo"}
                    onClick={(event) => {
                        setMember(event.target.getAttribute("value"));
                    }}
                >
                    Jisoo
                </Tab>
            </Tabmenu>
        </>
    );
};

const HeaderWrap = styled.header`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid black;
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
