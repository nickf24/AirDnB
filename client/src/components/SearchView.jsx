import React from 'react';
import data2 from '../../../sampleData2.js';
import HouseListing from './HouseListing.jsx';

const axios = require('axios');

class SearchView extends React.Component {
  	
  constructor(props) {
  	super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    
    let instance = this;
    axios.get(`/listings/${instance.props.searchTerm}`).then(function(response) {
      instance.setState({
        listings: response.data.rows
      })
    }).then(function(error) {
      console.log(error);
    })

  }

  render() {
    var noResults = null;
    if (this.state.listings.length === 0) {
      noResults = <div> Sorry, there appears to be no homes listed in this city </div>
    }
  	return (
 
        <div className = 'container-fluid'> 
          <div className = 'row'>
            <div className="col-md-8 cleanBorder"> 
            <div className = 'row'>
              {this.state.listings.map((house) => <HouseListing key = {JSON.stringify(house)}
                                                  house = {house} 
                                                  listingClickFn={ this.props.listingClickFn } />
              )}
              {noResults}
              </div>
            </div> 
            <div className="col-md-4">
              <img src = 'https://media.wired.com/photos/59333e64714b881cb296a4d4/master/w_933,c_limit/Google-Maps-shot-of-San-Francisco.png'/>
            </div>
          </div>
  	    </div> 
  	)

  }

}

export default SearchView;

// need from DATA
// 1. images
// 2. Listing title
// 2. Home Type (e.g. 'cabin')
// 3. Price per night
// 4. Star rating/Number of reviews
// 5. Superhost (?)
// 


  	    // <span> {house1.listingTitle} </span>
  	    // <span> {house1.price} </span> 
  	    // <img src = {house1.images[0]}/>