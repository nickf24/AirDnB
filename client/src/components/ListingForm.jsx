import React from 'react';

const axios = require('axios');

class ListingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                    mainTitle: '',
                    price: 0,
                    address: '',
                    city: '',
                    state: '',
                    typeofhome: 'Private Home',
                    guests: 1,
                    bedrooms: 1,
                    bathrooms: 1,
                    description: '',
                    houserules:'',
                    cancellations: '',
                    mainurl:'',
                    secondaryurl:''
                }
  }

  handleInput(property, int, e) {
    var input = e.target.value

    // if (int) {
    //   input = parseInt(input);
    // }

    this.setState({
      [property]: input
    })
  }

  addListing() {
    // send a post request to the server
    var instance = this;
    var formObj = {
      mainTitle: instance.state.mainTitle.replace(/'/g, "''"), price: instance.state.price, city: instance.state.city.replace(/'/g, "''"), state: instance.state.state.replace(/'/g, "''"), address: instance.state.address.replace(/'/g, "''"),
      typeOfHome: instance.state.typeofhome, guests: instance.state.guests, bedrooms: instance.state.bedrooms, bathrooms: instance.state.bathrooms,
      description: instance.state.description.replace(/'/g, "''"), houserules: instance.state.houserules, cancellations: instance.state.cancellations.replace(/'/g, "''"), 
      mainurl: instance.state.mainurl, secondaryurl: instance.state.secondaryurl 
    }
      // STEP ONE: MAKE THE OBJECT YOU WANT TO ADD TO THE DATABASE - THAT IS formObj
      // CREATE A POST REQUEST FROM THE CLIENT
      // THE GOAL IS TO PASS formObj from the CLIENT -> SERVER -> DATABASE (where it will be added to the database)
      // Then we're sending responses back down from the DB to confrim we have inserted it
      axios.post('/listings', formObj).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })

  }

  render() {
    return (

      <div className="container cleanBorder">
          <img src="https://www.sevenkeys.cz/wp-content/uploads/2016/10/Superhost.jpg" id="centerImage" className = "img-responsive " width={400} height={200} mode={'fit'}/>
        <div className="row form-group">

          {/****** First Row with Main Title and Price ****/}
          <div className="col-md-8 marginPush">
             Main Title: <input type="text" className="form-control" value={this.state.mainTitle} onChange={this.handleInput.bind(this, 'mainTitle', false)} placeholder="ex. Hobbiton of the Shire"/>
          </div>

          <div className="col-md-4 marginPush">
             Price Per Night: <input type="text" className="form-control" value={this.state.price} onChange={this.handleInput.bind(this, 'price', true)} placeholder="ex. 999"/>
          </div>

          {/******Second Row with locational information****/}
          <div className="col-md-4 formPush">
            Address: <input type="text" className="form-control" value={this.state.address} onChange={this.handleInput.bind(this, 'address', false)} placeholder="ex. 123 Circle Street"/>
          </div>

          <div className="col-md-4 formPush">
            City: <input type="text" className="form-control" value={this.state.city} onChange={this.handleInput.bind(this, 'city', false)} placeholder="ex. San Francisco"/>
          </div>

          <div className="col-md-4 formPush">
            State: <input type="text" className="form-control" value={this.state.state} onChange={this.handleInput.bind(this, 'state', false)} placeholder="ex. California"/>
          </div>

        {/******Third Row with Type of Home, Description of Home (accomodation, bed, bath)****/}
          <div className="col-md-6 formPush">
          <label htmlFor="houselisting">Type of Home:</label>
            <select className="form-control" value={this.state.typeofhome} onChange={this.handleInput.bind(this, 'typeofhome', false)}>
              <option value="Private Home" >Private Home</option>
              <option value="Shared Home">Shared Home</option>
              <option value="Apartment">Apartment</option>
              <option value="RV">RV</option>
              <option value="Tent">Tent</option>
            </select>
          </div>

         <div className="form-group col-md-2">
          <label htmlFor="houselisting">Accomodates</label>
            <select className="form-control" value={this.state.guests} onChange={this.handleInput.bind(this, 'guests', true)}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7+ Guests</option>
            </select>
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="houselisting">Bedrooms</label>
            <select className="form-control" value={this.state.bedrooms} onChange={this.handleInput.bind(this, 'bedrooms', true)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7+</option>
            </select>
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="houselisting">Bathrooms</label>
            <select className="form-control" value={this.state.bathrooms} onChange={this.handleInput.bind(this, 'bathrooms', true)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7+</option>

            </select>
        </div>
        {/*************** Descriptions House Rules and Cancellations************/}
          <div className="col-md-4 formPush">
            <label htmlFor="comment">Description:</label>
            <textarea className="form-control" rows="4" value={this.state.description} onChange={this.handleInput.bind(this, 'description', false)}></textarea>
          </div>

          <div className="col-md-4 formPush">
            <label htmlFor="comment">House Rules:</label>
            <textarea className="form-control" rows="4" value={this.state.houserules} onChange={this.handleInput.bind(this, 'houserules', false)}></textarea>
          </div>

          <div className="col-md-4 formPush">
            <label htmlFor="comment">Cancellation:</label>
            <textarea className="form-control" rows="4" value={this.state.cancellations} onChange={this.handleInput.bind(this, 'cancellations', false)}></textarea>
          </div>
  
        {/*************** URLs ************/}
          <div className="col-md-6 marginPush">
             Main URL: <input type="text" className="form-control" value={this.state.mainurl} onChange={this.handleInput.bind(this, 'mainurl', false)} placeholder="ex. https://imgur.com/airdnb" required/>
          </div>

          <div className="col-md-6 marginPush">
             Main URL: <input type="text" className="form-control" value={this.state.secondaryurl} onChange={this.handleInput.bind(this,'secondaryurl', false)}placeholder="https://imgur.com/airdnb2" required/>
          </div>

         <button type="button" className="btn btn-outline-danger btn-block" onClick={() => this.addListing()}>Register with Airdnb</button> 
        </div>
      </div>
    )
  }
}

export default ListingForm




 

