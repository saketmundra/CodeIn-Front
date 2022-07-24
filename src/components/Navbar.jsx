import React,{useState} from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { useSelector } from "react-redux";
import Upload from "./Upload";


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 10px;
  position: relative;
`;

const Search = styled.div`
  width: 50%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1.5px solid #ccc;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 3px 10px;
  background-color: transparent;
  border: 2px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 3px;
`;
const User = styled.div`
  display: flex;
  font-weight: 500;
  gap: 12px;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px 10px;
  border-radius: 50px;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate()
  const [open, setopen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"
              onChange={(e) => setQ(e.target.value)} />
          <SearchIcon onClick={()=>navigate(`/api/search?q=${q}`)}/>
        </Search>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
        </Item>
        {currentUser ? (
          <User>
            <VideoCallIcon onClick={()=>setopen(true)} />
            <AccountCircleIcon />
            {currentUser.name}
          </User>
        ) : (
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              LOG IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
    {open && <Upload setOpen={setopen}/>}
    </>
  );
};

export default Navbar;
