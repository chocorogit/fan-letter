import React, { useState } from "react";
import styled from "styled-components";
import Header from "components/Header";
import Form from "components/Form";
import LetterList from "components/LetterList";

const Home = ({ lettersList, setLettersList }) => {
    const [member, setMember] = useState("Jenny");
    return (
        <Container>
            <Header member={member} setMember={setMember} />
            <Form lettersList={lettersList} setLettersList={setLettersList} />
            <LetterList member={member} lettersList={lettersList} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
        url("https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iK1.u6oUF6FE/v0/1600x800.jpg");
    background-size: 100%;
    background-position: center bottom;
    background-repeat: no-repeat;
`;

export default Home;
