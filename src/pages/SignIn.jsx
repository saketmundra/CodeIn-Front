import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px 15px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;



const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Welcome to CodeIn</Title>
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
        <Title></Title>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign up</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
