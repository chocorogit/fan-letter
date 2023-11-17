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
                <Tab>
                    <ClickableTab
                        href=""
                        value={"Jenny"}
                        clicked={member === "Jenny"}
                        onClick={(event) => {
                            event.preventDefault();
                            setMember(event.target.getAttribute("value"));
                        }}
                    >
                        Jenny
                    </ClickableTab>
                </Tab>
                <Tab>
                    <ClickableTab
                        href=""
                        value={"Rose"}
                        clicked={member === "Rose"}
                        onClick={(event) => {
                            event.preventDefault();
                            setMember(event.target.getAttribute("value"));
                        }}
                    >
                        Rose
                    </ClickableTab>
                </Tab>
                <Tab>
                    <ClickableTab
                        href=""
                        value={"Lisa"}
                        clicked={member === "Lisa"}
                        onClick={(event) => {
                            event.preventDefault();
                            setMember(event.target.getAttribute("value"));
                        }}
                    >
                        Lisa
                    </ClickableTab>
                </Tab>
                <Tab>
                    <ClickableTab
                        href=""
                        value={"Jisoo"}
                        clicked={member === "Jisoo"}
                        onClick={(event) => {
                            event.preventDefault();
                            setMember(event.target.getAttribute("value"));
                        }}
                    >
                        Jisoo
                    </ClickableTab>
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
`;

const Tab = styled.li`
    font-size: 24px;
`;

const ClickableTab = styled.a`
    padding: 4px 24px;
    border: 1px solid ${({ clicked }) => (clicked ? "white" : "none")};
`;

export default Header;
