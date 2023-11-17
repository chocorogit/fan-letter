import React from "react";
import styled from "styled-components";

const LetterCard = ({ letter, member }) => {
    const { nickname, avatar, content } = letter;
    // LetterCard. createdAt 렌더링하기 전에 문자열로 변환
    const formattedDate = letter.createdAt.toLocaleString();

    return (
        <Letter href="">
            <ThumbImage src={avatar} alt="이미지 설명" />
            <Nickname>{nickname}</Nickname>
            <StyledDate>{formattedDate}</StyledDate>
            <Comment>{content}</Comment>
        </Letter>
    );
};

const Letter = styled.a`
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

const Comment = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export default LetterCard;
