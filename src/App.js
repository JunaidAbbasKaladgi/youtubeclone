import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { VideoList } from './VideoList';
import { Videoplayer } from './Videoplayer';
import  SearchBar  from './SearchBar';

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
      <SearchBar queryCollector={(query)=>{
        makeAPICall(query)
      }}></SearchBar>
         <div className=" mt-[2vh] ml-[10vh] gap-[2vh] flex">
         <Videoplayer selectedVideo={selectedVideo}></Videoplayer>
        <VideoList updateSelectedVideo={(input)=>{updateSelectedVideo(input)}} videos={videos}></VideoList>
        </div>
    </div>
  )
}
export default App;