import React from 'react';
import axios from 'axios';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: ''
    }
  }

  handleInput(field, event) {
    this.setState({ [field]: event.target.value });
  }

  handleUserInfo() {
    var info = {
      email: this.state.email,
      phone: this.state.phone,
      fields: ['email', 'phone']
    }

    var app = this;
    axios.patch('/profile', info)
      .then(response => {
        console.log('patched: ', response);
        this.props.showProfile();
      })
      .catch(error => {
        console.error(error);
      })

    this.props.showProfile();

    this.setState({
      email: '',
      phone: ''
    });
  }

  render() {
    return (
      <div className="bgimage zAxis" id="centerLogin" style={{backgroundImage: 'url("https://a0.muscache.com/im/pictures/a212f9a0-3550-4fb4-8d70-eceaafde4c1b.jpg?aki_policy=xx_large")'}}>
        <div className="offset-md-4 col-md-4 offset-md-4 cleanBorder" id="whiteBackground">
        <img className="img-fluid rounded mx-auto d-block marginPush" src="logo/airdnb_logo_small.png"/>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              className="form-control" 
              name="email" 
              placeholder="Enter email"
              value={ this.state.email }
              onChange={ this.handleInput.bind(this, 'email') } />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="text" 
              className="form-control" 
              name="phone" 
              placeholder="Enter phone number"
              value={ this.state.phone }
              onChange={ this.handleInput.bind(this, 'phone') } />
          </div>
          <br />
          <button 
            type="button" 
            className="btn btn-outline-danger btn-block"
            onClick={ this.handleUserInfo.bind(this) }>Finish Sign Up</button>
        </form>
      </div>
    </div>
    )
  }
}

export default UserInfo;