import React from 'react';


class HouseListing extends React.Component {

  constructor(props) {
  	super(props);
  }


  render() {
  	console.log(this.props.house)
  	return (
  		<div> 

  	      <span> {this.props.house.listingTitle} </span>
    	  <span> {this.props.house.price} </span> 
  	      <img src = {this.props.house.images[0]}/>

  		</div> 

  	)

  }











}




export default HouseListing;

// 8 to 4 