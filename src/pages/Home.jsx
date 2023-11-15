import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import Form from "components/Form";
import LetterCard from "components/LetterCard";

const Home = () => {
    return (
        <Container>
            <Header />
            <Form />
            <LetterWrap>
                <LetterCard></LetterCard>
            </LetterWrap>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LetterWrap = styled.div`
    width: 640px;
    margin: 40px 0;
    border: 1px solid #fff;
`;

export default Home;
