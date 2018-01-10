import React from 'react';
import SearchView from './SearchView.jsx';

class Search extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      location: '',
      searched: false
    };
  };

  locationChange(event) {
    this.setState( (prevState) => {
      return {
        location: event.target.value,
        searched: prevState.searched  
      }
      
    });
  }

  clickAdd(){
  	console.log(this.state.location);
    this.setState((prevState) => {
      return {
        location: prevState.location,
        searched: true
      }
    })
   }
   
  render() {
    var searchView = null;
    if (this.state.searched) {
      searchView = <SearchView />
    }


	  return (
	  <div className="col-md-12">
	    <div className="input-group">
	    <input className="form-control" type="text" value={this.state.city} onChange={this.locationChange.bind(this)} placeholder="search..."/>
	    <span className="input-group-btn">
	      <button className="btn btn-danger" type="button" onClick={this.clickAdd.bind(this)}>SEARCH</button>
	    </span>
	    </div>
      <SearchView />
	  </div> 
	  )
  }

};

export default Search