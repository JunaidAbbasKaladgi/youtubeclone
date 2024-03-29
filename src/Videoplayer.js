import React from 'react'

export const Videoplayer = (props) => {
    if(props.selectedVideo){
        var VideoId=props.selectedVideo.id.videoId;
        var url=`https://www.youtube.com/embed/${VideoId}`
  return (
    <div>
       <iframe width="750px" height="400px" style={{borderRadius:"3vh"}} src={url}></iframe>
       <h2>{props.selectedVideo.snippet.title}</h2>
    </div>
  )
}

else{
    <div>
        <h1>Loading......</h1>
    </div>
}
}