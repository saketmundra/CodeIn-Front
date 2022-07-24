import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Reviews from "../components/Reviews";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { format } from "timeago.js";
import Recommendation from "../components/Recommendation";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 4;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;


const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.textSoft};
  border: none;
  border-radius: 50px;
  height: max-content;
  padding: 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(
          `/api/video/find/${path}`
        );
        const channelRes = await axios.get(
          `/api/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [path, dispatch]);



  return (
    <Container>
      <Content>
        <VideoWrapper>
        <VideoFrame src={currentVideo.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>{currentVideo.views} views •  {format(currentVideo.createdAt)}</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.img} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>200K Views</ChannelCounter>
              <h4>About the Course</h4>
              <Description>
              {currentVideo.desc}
                
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>
            <FavoriteBorderIcon />
          </Subscribe>
        </Channel>
        <Hr />
        <Reviews />
      </Content>
      <Recommendation tags={currentVideo.tags} />
    </Container>
  );
};

export default Video;
