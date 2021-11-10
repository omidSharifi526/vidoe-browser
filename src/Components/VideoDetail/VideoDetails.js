import React,{useState,useEffect} from 'react'

const VideoDetails = ({selectedVideo}) => {
    
      const showdata=()=>{
        console.log(selectedVideo.id.videoId);
      }
      showdata()
   
      const videosrc=`https://www.youtube.com/embed/${selectedVideo.id.videoId}`

    
    if (!selectedVideo) {
        return(<div></div>)
    }
    return (
        <div className='container'>
            <iframe src={videosrc}  className='border w-100' />
            <h3>{selectedVideo.snippet.title}</h3>
            <p>{selectedVideo.snippet.description}</p>
            
        </div>
    )
}

export default VideoDetails
