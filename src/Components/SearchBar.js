import React, { Component } from 'react';

class SearchBar extends Component {

    state={
        textSearch:''
    }

    changeHandler=(e)=>{
        this.setState({textSearch:e.target.value});
        //console.log(this.state.textSearch);
        
    }

    sendDatafParent=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.textSearch)

    }




    render() {
        return (
            <div className='col-8 mx-auto'>
               <form onSubmit={this.sendDatafParent}>
               <label  className="form-label">VideoSearch</label>
               <input type="text" value={this.state.textSearch} onChange={this.changeHandler}  className="form-control" />
              <div  className="form-text">
                enter part of name
               </div>
               </form>
                
            </div>
        );
    }
}

export default SearchBar;