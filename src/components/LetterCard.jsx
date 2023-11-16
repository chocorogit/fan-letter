import React from "react";
import styled from "styled-components";

const LetterCard = ({ letter }) => {
    console.log("letter", letter.id);
    const { createdAt, nickname, avatar, content, writedTo, id } = letter;

    return (
        <Letter>
            <ThumbImage src={avatar} alt="이미지 설명" />
            <Nickname>{nickname}</Nickname>
            <StyledDate>{createdAt}</StyledDate>
            <Comment>{content}</Comment>
            {/* 나머지 내용도 추가 */}
        </Letter>
    );
};

const Letter = styled.div`
    margin: 24px;
    padding: 24px;
    border: 1px solid #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
`;

const ThumbImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;

const Nickname = styled.h3`
    font-size: 16px;
`;
const StyledDate = styled.span``;

const Comment = styled.p``;

export default LetterCard;
