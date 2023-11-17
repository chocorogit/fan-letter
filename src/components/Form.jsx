import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

const Form = ({ member, lettersList, setLettersList }) => {
    const [nickname, setNickname] = useState("");
    const [content, setContent] = useState("");
    const [writedTo, setWritedTo] = useState("Jenny");

    const nicknameHandler = (e) => {
        setNickname(e.target.value);
    };

    const contentHandler = (e) => {
        setContent(e.target.value);
    };
    const addLetter = (e) => {
        e.preventDefault();

        const currentDate = new Date();

        let newLetter = {
            createdAt: currentDate,
            nickname,
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/599.jpg",
            content,
            writedTo,
            id: uuid(),
        };
        setLettersList([...lettersList, newLetter]);

        setNickname("");
        setContent("");
    };

    useEffect(() => {
        console.log("lettersList updated:", lettersList);
    }, [lettersList]);

    const selectMember = (e) => {
        setWritedTo(e.target.value);
    };
    return (
        <>
            <FormContainer>
                <BoxWrap>
                    <Label>닉네임</Label>
                    <Input
                        value={nickname}
                        onChange={nicknameHandler}
                        placeholder="최대 20글자까지 작성할 수 있습니다."
                        maxLength={20}
                    ></Input>
                </BoxWrap>
                <BoxWrap>
                    <Label>내용</Label>
                    <Textarea
                        value={content}
                        onChange={contentHandler}
                        placeholder="최대 100글자까지 작성할 수 있습니다."
                        maxLength={100}
                    ></Textarea>
                </BoxWrap>
                <BoxWrap>
                    <Label>누구에게 보내실 건가요?</Label>
                    <Select onChange={selectMember}>
                        <Option value={"Jenny"}>Jenny</Option>
                        <Option value={"Rose"}>Rose</Option>
                        <Option value={"Lisa"}>Lisa</Option>
                        <Option value={"Jisoo"}>Jisoo</Option>
                    </Select>
                </BoxWrap>
                <Button onClick={addLetter}>팬레터 등록</Button>
            </FormContainer>
        </>
    );
};

const FormContainer = styled.form`
    width: 640px;
    margin-top: 100px;
    padding: 40px;
    border: 1px solid #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
`;

const BoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Label = styled.label`
    margin-bottom: 10px;
    font-size: 20px;
`;

const Input = styled.input`
    height: 40px;
    padding: 4px;
    font-size: 18px;
    background: unset;
`;
const Textarea = styled.textarea`
    height: 120px;
    padding: 4px;
    font-size: 18px;
    resize: none;
    background: unset;
`;
const Select = styled.select`
    height: 40px;
    padding: 4px;
    font-size: 18px;
    background: unset;
`;
const Option = styled.option`
    color: black;
`;
const Button = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid #fff;
`;

export default Form;
