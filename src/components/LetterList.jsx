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
    width: 640px;
    margin: 40px 0;
    border: 1px solid #fff;
`;
export default LetterList;
