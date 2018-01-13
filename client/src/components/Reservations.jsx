import React from 'react';

let Reservations = ({listing}) => {

	return (

		<div className="card sticky-top zAxis">
			 <div className="card-header">
				<h4 className="text-center">${listing.price} USD</h4>
			</div>
			<br />

		  	<div className="jumbotron"> 
		  	</div>

		  	<div className="card-body">
				<input className="form-control" type="text" placeholder="Check In"/>
				<br />
				<input className="form-control" type="text" placeholder="Check Out"/>
				<br />
				<a href='#'><button type="button" className="btn btn-danger btn-lg btn-block">REQUEST A BOOKING</button></a>
		  	</div>

				<div className="card-footer text-center">Rating: {listing.rating.map((star) => <i className="fa fa-star" id="starUpMargin" aria-hidden="true"></i>)}</div>
		</div>
	)
}

export default Reservations;