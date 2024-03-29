import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { VideoList } from './VideoList';
import { Videoplayer } from './Videoplayer';
import { SearchBar } from './SearchBar';

 const App = () => {
  const [videos, setvideos] = useState([])
  const [selectedVideo, setselectedVideo] = useState(null)
  const updateSelectedVideo=(updateSelectedVideoByUser)=>{
    setselectedVideo(updateSelectedVideoByUser)
  }
  const makeAPICall=async(query)=>{
    var response=await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+query+"&type=video&key=AIzaSyDVuRUWXHqkOQ7ptrNIDCBNsu5gJFxOyLE")
    console.log("response",response)
    setvideos(response.data.items)
    setselectedVideo(response.data.items[0])
  }
  useEffect(() => {
  makeAPICall('java')
},[])
  return (
    <div>
      <div style={{display:'flex',gap:"40vh"}}>
      <img style={{width:"200px",height:"90px"}} src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="" />
      <SearchBar queryCollector={(query)=>{
        makeAPICall(query)
      }}></SearchBar>
      </div>
         <div className="" style={{display:'flex',gap:"10vh",marginLeft:"10vh",marginTop:"2vh"}}>
         <Videoplayer selectedVideo={selectedVideo}></Videoplayer>
        <VideoList updateSelectedVideo={(input)=>{updateSelectedVideo(input)}} videos={videos}></VideoList>
        </div>
    </div>
  )
}
export default App;