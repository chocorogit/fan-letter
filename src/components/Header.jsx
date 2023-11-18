import React from "react";
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
    height: auto;
    margin: 0 40px;
    font-size: 64px;
    margin: 40px 20px 60px;
    padding: 8px 0;
    color: #f7a7bb;
    box-shadow: 0 0 10px #f7a7bb;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

const Tabmenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 20px; */
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    font-size: 24px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

const Tab = styled.li`
    width: 25%;
    font-size: 25px;
`;

const ClickableTab = styled.a`
    display: inline-block;
    width: 100%;
    padding: 8px;
    text-align: center;
    border: 1px solid ${({ clicked }) => (clicked ? "#f7a7bb" : "#333")};
    box-shadow: 0 0 8px ${({ clicked }) => (clicked ? "#f7a7bb" : "none")};
`;

export default Header;
