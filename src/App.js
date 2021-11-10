import React from "react";

import SearchBar from "./Components/SearchBar";
import youtube from './Api/Youtube'
class App extends React.Component {

  state={
    videos:[]
  }

   GetData=async(term)=>{
    //console.log(term,'child');
    const response=await youtube.get('/search',{
      params:{
        q:term
      }
    }
    )
    
    this.setState({videos:response.data.items})
    console.log(this.state.videos);

  }


  render(){
    return (
      <div className="App">
       <h1>{this.state.videos.length}</h1>
       <SearchBar onSubmit={this.GetData} />
      </div>
    );
  }
}

export default App;
