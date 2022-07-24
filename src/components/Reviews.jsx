import React from "react";
import styled from "styled-components";
import Comment from "./Review";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment/>
    </Container>
  );
};

export default Comments;
