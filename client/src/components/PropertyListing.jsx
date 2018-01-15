import React from 'react';
import moment from 'moment';

class PropertyListing extends React.Component {

  constructor(props) {
  	super(props);
  }



  render() {

    var bedroomData;
    this.props.house.bedrooms !== 1 ? bedroomData = 'beds' : bedroomData = 'bed'

    var bathroomData;
    this.props.house.bathrooms !== 1 ? bathroomData = 'baths' : bathroomData = 'bath'

    var randomNumber = function(min, max) {
    var number = Math.ceil((max-min) * Math.random())
      return number
    }

    var isoDate = new Date().toISOString()
    
    var date = new Date();
    var year = date.getFullYear();
    if (this.props.house.reserved_dates !== null) {
      var fromDate = this.props.house.reserved_dates[0].split('T')[0].slice(5) +'-'+year;
      var toDate = this.props.house.reserved_dates[1].split('T')[0].slice(5) +'-'+year;
      var fromDateObject = Date.parse(this.props.house.reserved_dates[0])
    }

    var numberOfRatings = randomNumber(1,10000);

  	return (
      
			<div className="row centerDiv formPush">

        <a href="#" className="col-md-4 shadowButton"><img src = {this.props.house.images[0]} 
          className = "img-thumbnail img-responsive " onClick = {() => this.props.handleClick(this.props.house)} width={600} height={400} mode={'fit'}/></a>

        <div className="col-6 shadowButton"> 
          <h6>
              <div>{this.props.house.typehome} - {this.props.house.bedrooms} {bedroomData} - {this.props.house.bathrooms} {bathroomData}</div>
              {this.props.house.listingtitle}
              <br />
              <br />
              {this.props.house.street}
              <br />
              {this.props.house.city}  {this.props.house.state}
          </h6>

        </div>
  		</div> 
  	)
  }
}


export default PropertyListing;

// 8 to 4 

