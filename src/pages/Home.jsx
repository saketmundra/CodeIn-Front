import React from "react";
import { useEffect ,useState} from "react";
import styled from "styled-components";
import axios from "axios"
import Card from "../components/Card";
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color:white;
`;

const Home = () => {

  const [videos,setVideos]=useState([])
  const [found,setFound]=useState(false);
  useEffect(() => {
    const fetchVideos=async()=>{
      const res=await axios.get("https://codetube-backend-x5vx.onrender.com/api/videos/random")
      setFound(true);
      setVideos(res.data);
    }
    fetchVideos();
    // "proxy": "https://codetube-backend-x5vx.onrender.com"
    
  },[found])
  

  return (
    <Container>
      {!found?<>
      <CircularProgress />
      <h3>This website is using free backend services so this might take 20-30 seconds to load. Your patience is appretiated. ThankYou!</h3>
      </>:
       videos.map((video) => (
        <Card key={video._id} video={video}/>
      )) }
    </Container>
  );
};

export default Home;
