import React from 'react';


class HouseListing extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	// console.log(this.props.house)
  	return (
			<div className ='img-responsive center-block col-md-3 col-sm-6 col-xs-12 img-thumbnail thumbnailListings'
			     onClick={ this.props.listingClickFn.bind(null, this.props.house) } > 
        <a href="#"><img src = {this.props.house.images[0]} className = "rounded img-thumbnail" width={300} height={200} mode={'fit'}/></a>
	      <h6>{this.props.house.listingtitle}</h6>    
        <p>${this.props.house.price} USD</p>
  		</div> 
  	)
  }
}




export default HouseListing;

// 8 to 4 