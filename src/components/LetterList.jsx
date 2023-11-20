import React from "react";
import styled from "styled-components";
import LetterCard from "./LetterCard";

const LetterList = ({ member, lettersList }) => {
    const lettersForOne = lettersList.filter((letter) => letter.writedTo === member);
    return (
        <Container>
            {lettersForOne.map((letter) => {
                return <LetterCard key={letter.id} letter={letter}></LetterCard>;
            })}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: calc(100% - 40px);
    max-width: 640px;
    margin: 0 20px;
    margin: 40px 20px;
    border: 1px solid #fff;
`;
export default LetterList;
