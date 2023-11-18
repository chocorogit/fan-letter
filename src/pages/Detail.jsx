import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Detail({ lettersList }) {
    const { id } = useParams();
    const navigate = useNavigate(); // useNavigate를 호출하여 함수 내에서 사용할 수 있도록 함
    // id를 사용하여 해당 편지를 찾음
    const letter = lettersList.find((letter) => letter.id === id);
    const formattedDate = letter.createdAt.toLocaleString();

    const [isEditing, setIsEditing] = useState(false);
    const [editingText, setEditingText] = useState("");

    const handleDelete = (id) => {
        const answer = window.confirm("정말로 삭제하시겠습니까?");
        if (!answer) return;

        //   deleteLetter(id);
    };

    const handleEdit = (id) => {
        if (!editingText) return alert("수정된 부분이 없습니다.");
        setIsEditing(false);
        const answer = window.confirm("이대로 수정하시겠습니까?");
        if (!answer) return;

        //   editLetter({ id, editingText });
    };

    return (
        <Container>
            <ToHome onClick={() => navigate("/")}>
                <svg width="21" height="21" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#ffffff"
                        d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0z"
                    />
                </svg>
                홈으로 가기
            </ToHome>
            <Letter>
                <WritedTo>TO : {letter.writedTo}</WritedTo>
                <ThumbImage src={letter.avatar} alt="이미지 설명" />
                <Nickname>{letter.nickname}</Nickname>
                <StyledDate>{formattedDate}</StyledDate>
                <Comment>{letter.content}</Comment>
                <Buttons>
                    {isEditing ? (
                        <DeleteButton onClick={() => handleEdit(letter.id)}>수정완료</DeleteButton>
                    ) : (
                        <>
                            <Button onClick={() => setIsEditing(true)}>수정</Button>
                            <Button onClick={() => handleDelete(letter.id)}>삭제</Button>
                        </>
                    )}
                </Buttons>
            </Letter>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;
const ToHome = styled.div`
    position: absolute;
    top: 40px;
    left: 40px;
    display: flex;
    align-items: center;
    padding: 20px 40px;
    border: 1px solid #fff;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
`;
const Letter = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    max-width: 640px;
    padding: 80px 40px 40px;
    border: 1px solid #fff;
    margin: 0 auto;
`;
const WritedTo = styled.span`
    position: absolute;
    top: 40px;
    left: 40px;
    font-size: 18px;
`;

const ThumbImage = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 80px;
`;

const Nickname = styled.h3`
    font-size: 20px;
    margin: 20px 0 8px;
`;

const StyledDate = styled.span`
    margin: 0 0 40px;
`;
const Comment = styled.p`
    width: 100%;
    font-size: 18px;
    word-break: keep-all;
    overflow-wrap: break-word;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 100%;
    margin-top: 60px;
`;
const DeleteButton = styled.div`
    width: 100%;
    padding: 8px 10px;
    color: #fff;
    text-align: center;
    border: 1px solid #fff;
    cursor: pointer;
`;
const Button = styled.div`
    width: 50%;
    padding: 8px 10px;
    color: #fff;
    text-align: center;
    border: 1px solid #fff;
    cursor: pointer;
`;
export default Detail;
