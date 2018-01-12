import React from 'react';


class HouseListing extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	return (
			<div className ='img-responsive center-block col-md-3 col-sm-6 col-xs-12 img-thumbnail thumbnailListings'
			     onClick={ this.props.listingClickFn.bind(null, this.props.house) } > 
        <a href="#"><img src = {this.props.house.images[0]} className = "rounded img-thumbnail" width={350} height={200} mode={'fit'}/></a>
        <h6 id="changeToRed">{this.props.house.typehome} - {this.props.house.bedrooms} bedrooms</h6>
	      <h6 id="hi">{this.props.house.listingtitle}</h6>    
        <p id="price">${this.props.house.price} USD</p>
        <i className="fa fa-star" id="starUpMargin" aria-hidden="true"></i>
  		</div> 
  	)
  }
}




export default HouseListing;

// 8 to 4 