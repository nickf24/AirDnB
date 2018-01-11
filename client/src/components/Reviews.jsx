import React from 'react';

let Reviews = ({listing}) => {	
	return (
			<div className="cleanBorder row marginPush">
				
					<div className="d-inline col-sm-1">
						<img width={100} height={65} mode={'fit'} src={listing.comments[0].imageURL}/>
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-8">
						<h6>" {listing.comments[0].body} "</h6>
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-1">
						<i className="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
					</div>
				
	    	</div>
	)
}

export default Reviews; 