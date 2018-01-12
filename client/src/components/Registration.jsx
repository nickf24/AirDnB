import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordMatch: ''
    }
  }

  handleInput(field, event) {
    this.setState({ [field]: event.target.value });
  }

  handleRegister() {
    var info = {
      username: this.state.username,
      password: this.state.password,
      passwordMatch: this.state.passwordMatch
    }

    this.props.handleRegistrationSubmit(info);

    this.setState({
      username: '',
      password: '',
      passwordMatch: ''
    });
  }

  render() {
    return (
      <div className="bgimage zAxis" id="centerLogin" style={{backgroundImage: 'url("https://a0.muscache.com/im/pictures/a212f9a0-3550-4fb4-8d70-eceaafde4c1b.jpg?aki_policy=xx_large")'}}>
        <div className="offset-md-4 col-md-4 offset-md-4 cleanBorder" id="whiteBackground">
        <img className="img-fluid rounded mx-auto d-block marginPush" src="logo/airdnb_logo_small.png"/>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              className="form-control" 
              name="username" 
              placeholder="Enter username" 
              value={ this.state.username }
              onChange={ this.handleInput.bind(this, 'username') } 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Enter password"
              value={ this.state.password }
              onChange={ this.handleInput.bind(this, 'password') } />
          </div>
          <div className="form-group">
            <label htmlFor="passwordMatch">Re-Enter Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="passwordMatch" 
              placeholder="Enter password"
              value={ this.state.passwordMatch }
              onChange={ this.handleInput.bind(this, 'passwordMatch') } />
          </div>
          <br />
          <button 
            type="button" 
            className="btn btn-outline-danger btn-block"
            onClick={ this.handleRegister.bind(this) }>Sign Up</button>
        </form>
      </div>
    </div>
    )
  }
}

export default Registration;