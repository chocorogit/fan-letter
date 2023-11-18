import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const LetterCard = ({ letter }) => {
    const { nickname, avatar, content } = letter;
    const formattedDate = letter.createdAt.toLocaleString();

    return (
        <StyledLink to={`/detail/${letter.id}`}>
            <ThumbImage src={avatar} alt="이미지 설명" />
            <Nickname>{nickname}</Nickname>
            <StyledDate>{formattedDate}</StyledDate>
            <Comment>{content}</Comment>
        </StyledLink>
    );
};

const StyledLink = styled(RouterLink)`
    margin: 24px;
    padding: 24px;
    border: 1px solid #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
    border-color: ${(props) => (props.isSelected ? "#00f" : "#fff")};
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
