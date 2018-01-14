import React from 'react';


let Reviews = ({listing}) => {	
	// console.log(listing);
	let comments = listing.description;
	// console.log(JSON.parse(listing.description));

	let image = null;
	let body = null;
	if (listing) {
	  image = <img className='rounded-circle' width={100} height={100} mode={'fit'} src={'https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png'}/>
	  body = <h6>"{listing.description}"</h6>
	}
	return (
			<div className="cleanBorder row marginPush">
				
					<div className="d-inline col-sm-1 formPadding">
					{image}
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-8 formPadding">
						{body}
					</div>
					<div className="col-sm-1"></div>
					<div className="d-inline col-sm-1 formPadding">
						<i className="fa fa-thumbs-up fa-4x" aria-hidden="true"></i>
					</div>
				
	    	</div>
	)
}

export default Reviews; 