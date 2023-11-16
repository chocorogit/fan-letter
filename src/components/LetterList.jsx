import React from "react";
import styled from "styled-components";
import letters from "../fakeData.json";
import LetterCard from "./LetterCard";

const LetterList = ({ member }) => {
    const lettersForOne = letters.filter((letter) => letter.writedTo === member);

    return (
        <Container>
            {lettersForOne.map((letter) => {
                console.log(letter);
                return <LetterCard key={letter.id} letter={letter}></LetterCard>;
            })}
        </Container>
    );
};

const Container = styled.div`
    width: 640px;
    margin: 40px 0;
    border: 1px solid #fff;
`;
export default LetterList;
