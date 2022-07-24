import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

import { useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch=useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/api/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Welcome to CodeIn</Title>
        <Input placeholder="Username" onChange={e=>setName(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        <Title></Title>
        <Input placeholder="Username" onChange={e=>setName(e.target.value)} />
        <Input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <Input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" />
        <Button>Sign up</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
