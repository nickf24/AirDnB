import React from 'react';


class HouseListing extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	// console.log(this.props.house)
  	return (
			<div className ='img-fluid col-md-3 col-sm-6 img-thumbnail thumbnailListings'
			     onClick={ this.props.listingClickFn.bind(null, this.props.house) } > 
        <img src = {this.props.house.images[0]} className = "rounded"/>
	      <h6>{this.props.house.listingTitle}</h6>    
        <p>{this.props.house.price}</p>
  		</div> 
  	)
  }
}




export default HouseListing;

// 8 to 4 