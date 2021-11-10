import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

function VideoList({videos,GetselVideo}) {
    return (
        <div>
           {
               videos.map((video)=>{
                   return(
                      <div className='container d-felx flex-column '>
                           <VideoItem GetselVideo={GetselVideo}  vid={video}/>
                      </div>
                   )

               })
           }
        </div>
    )
}

export default VideoList
