import React from 'react';
import data2 from '../../../sampleData2.js';
import HouseListing from './HouseListing.jsx';

class SearchView extends React.Component {
  	
  constructor(props) {
  	super(props);
  }

  render() {
    // var house1 = data2[0].listings[0];
    // console.log(house1);
  	return (


  	  <div> 

  	    {data2.map((house) => <HouseListing house = {house}/>)}
  	  
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