import React from "react";

import SearchBar from "./Components/SearchBar";
import youtube from './Api/Youtube';
import VideoList from "./Components/VideoList/VideoList";
import VideoDetails from "./Components/VideoDetail/VideoDetails";
class App extends React.Component {

  state={
    videos:[],
    selectedVideo:null
  }

   GetData=async(term)=>{
    //console.log(term,'child');
    const response=await youtube.get('/search',{
      params:{
        q:term
      }
    }
    )
    
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
    //console.log(this.state.videos);

  }
//lift state up
//get data from childs Without context or redux

  GetselVideo=(dt)=>{
    //console.log(dt);
    this.setState({selectedVideo:dt})
  

  }


  render(){
    return (
      <div className="App">
       <SearchBar onSubmit={this.GetData} />
      <div className='row'>
        <div className='col-8'>
        <VideoDetails selectedVideo={this.state.selectedVideo}/>
        </div>
    
     <div className='col-3'>
     <VideoList  GetselVideo={this.GetselVideo} videos={this.state.videos}/>
     </div>
       
      </div>
      
      </div>
    );
  }
}

export default App;
