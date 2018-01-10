import React from 'react';

class Search extends React.Component {

  constructor (props) {
    super(props);
  };

  
   
  render() {

	  return (
	  <div className="col-md-12">
	    <div className="input-group">
	    <input className="form-control shadowButton" type="text" placeholder="TRY 'SAN FRANCISCO'" id = 'searchForm'/>
	    <span className="input-group-btn">
	      <button className="btn btn-danger btn-lg shadowButton" type="button" onClick={() => this.props.clickFn(document.getElementById('searchForm').value)}>SEARCH</button>
	    </span>
	    </div>
    
	  </div> 
	  )
  }

};

export default Search