import React from 'react'

export const Videoplayer = (props) => {
    if(props.selectedVideo){
        var VideoId=props.selectedVideo.id.videoId;
        var url=`https://www.youtube.com/embed/${VideoId}`
  return (
    <>
    <div className='text-center w-[850px] h-[460px]'>
       <iframe className='w-full rounded-lg h-full' src={url}></iframe><br />
       <p className=' font-bold text-3xl'>{props.selectedVideo.snippet.title}</p>
    </div>
    </>
  )
}

else{
    <div>
        <h1>Loading......</h1>
    </div>
}
}