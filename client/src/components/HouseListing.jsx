import React from 'react';


class HouseListing extends React.Component {

  constructor(props) {
  	super(props);
  }



  render() {

    var bedroomData;
    this.props.house.bedrooms !== 1 ? bedroomData = 'beds' : bedroomData = 'bed'

    var randomNumber = function(min, max) {
    var number = Math.ceil((max-min) * Math.random())
      return number
    }

    var numberOfRatings = randomNumber(1, 10000);
    
    var ratings = null;
    if (this.props.house.rating !== null) {
      ratings = <span id="inlineBlock">{this.props.house.rating.map((star, index) => <i key={index} className="fa fa-star" id="starUpMargin" aria-hidden="true"></i>)} {numberOfRatings}</span>
    }
    
  	return (
      
			<div className ='img-responsive center-block col-md-3 col-sm-6 col-xs-12 img-thumbnail thumbnailListings'
			     onClick={ this.props.listingClickFn.bind(null, this.props.house) } > 

        <a href="#"><img src = {this.props.house.images[0]} className = "img-responsive rounded img-thumbnail" width={700} height={400} mode={'fit'}/></a>

        <h6 id="changeToRed">{this.props.house.typehome} - {this.props.house.bedrooms} {bedroomData}</h6>

	      <h6 id="hi">{this.props.house.listingtitle}</h6>

        <p id="price">${this.props.house.price} USD</p>

        {ratings}


  		</div> 
  	)
  }
}


export default HouseListing;

// 8 to 4 

