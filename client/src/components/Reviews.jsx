import React from 'react';

let Reviews = ({listing}) => {	
	// console.log(listing);
	let comments = listing.description;
	// console.log(JSON.parse(listing.description));

	let image = null;
	let body = null;
	if (listing) {
	  image = <img width={100} height={65} mode={'fit'} src={listing.comments[0].imageURL}/>
	  body = <h6>" {listing.description} "</h6>
	}
	return (
			<div className="cleanBorder row marginPush">
				
					<div className="d-inline col-sm-1">
					{image}
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-8">
						{body}
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-1">
						<i className="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
					</div>
				
	    	</div>
	)
}

export default Reviews; 