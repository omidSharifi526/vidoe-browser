import React from 'react';
import './VideoItem.css'

const VideoItem = ({vid,GetselVideo}) => {
     const senData=(e)=>{

        GetselVideo(e.target.value)

     }
    
    return (
       <div onClick={()=>GetselVideo(vid)}>
            <div  className="border video-item m-1 p-1 ">
            <img src={vid.snippet.thumbnails.medium.url}/>
           {vid.snippet.title}
        </div>
       </div>
    )
}

export default VideoItem
