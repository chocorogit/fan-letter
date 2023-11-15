import React from "react";
import styled from "styled-components";

const LetterCard = () => {
    return (
        <>
            <Letter>
                <Nickname>제니젠득</Nickname>
                <Date>23. 11. 03. 오후 02:40:17</Date>
                <Comment>제니는 천상연옌💖💗 젠득이 화이팅</Comment>
            </Letter>
            <Letter>
                <Nickname>제니젠득</Nickname>
                <Date>23. 11. 03. 오후 02:40:17</Date>
                <Comment>제니는 천상연옌💖💗 젠득이 화이팅</Comment>
            </Letter>
        </>
    );
};

const Letter = styled.div`
    margin: 24px;
    padding: 24px;
    border: 1px solid #fff;
`;
const Nickname = styled.h3`
    font-size: 16px;
`;
const Date = styled.span``;

const Comment = styled.p``;

export default LetterCard;
