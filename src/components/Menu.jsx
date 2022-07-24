import React ,{useEffect,useState}from "react";
import axios from "axios"
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AndroidIcon from '@mui/icons-material/Android';
import CalculateIcon from '@mui/icons-material/Calculate';
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from "react-router-dom";
import DataObjectIcon from '@mui/icons-material/DataObject';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size:20px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius:7px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const [videos,setVideos]=useState([])
  useEffect(() => {
    const fetchVideos=async()=>{
      const res=await axios.get("/api/video/random")
      setVideos(res.data);
    }
    fetchVideos();
    
  },[])
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <CodeIcon/>
            CodeIn
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <FavoriteIcon/>
          Wishlist
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Your Courses
        </Item>
        <Hr />
        <Title>Get Started</Title>
        <Item>
          <WebIcon />
          Web Dev
        </Item>
        <Item>
          <AndroidIcon/>
          Android Dev
        </Item>
        <Item>
          <DataObjectIcon />
          Data Science
        </Item>
        <Item>
          <CalculateIcon />
          Algorithms
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          Projects
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
