import React, { useState } from "react";
import styled from "styled-components";
import letters from "../fakeData.json";
import Header from "components/Header";
import Form from "components/Form";
import LetterList from "components/LetterList";
import LetterCard from "components/LetterCard";

const Home = () => {
    const [member, setMember] = useState("Jenny");
    const [lettersList, setLettersList] = useState(letters);
    return (
        <Container>
            <Header member={member} setMember={setMember} />
            <Form member={member} lettersList={lettersList} setLettersList={setLettersList} />
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
