import React from 'react';


class HouseListing extends React.Component {

  constructor(props) {
  	super(props);
  }


  render() {
  	console.log(this.props.house)
  	return (
  		<div className = 'col-md-4'> 
        <img src = {this.props.house.images[0]} className = "rounded"/>
	      <span> {this.props.house.listingTitle} </span>    
        <span> {this.props.house.price} </span>
  		</div> 


  	)

  }











}




export default HouseListing;

// 8 to 4 