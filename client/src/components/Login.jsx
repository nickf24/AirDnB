import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput(field, event) {
    console.log(field);
    this.setState({ [field]: event.target.value });
  }

  handleLogin() {
    var info = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.handleLoginSubmit(info);

    this.setState({
      username: '',
      password: ''
    });
  }

   // style={{backgroundImage: 'url("logo/login.jpeg")'}}
   // style={{backgroundColor: "#FFFFFF"}}

  render() {
    return(
      <div className="bgimage zAxis" id="centerLogin" style={{backgroundImage: 'url("logo/login.jpeg")'}}>
      <div >
        <div className="offset-md-4 col-md-4 offset-md-4 cleanBorder" id="whiteBackground">
        <img className="img-fluid rounded mx-auto d-block marginPush" src="logo/airdnb_logo_small.png"/>
        <form>
          <div className="form-group">
            <h6> Username </h6>
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
            <h6> Password </h6>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              placeholder="Enter password"
              value={ this.state.password }
              onChange={ this.handleInput.bind(this, 'password') } />
          </div>
          <br />
          <button 
            type="button" 
            className="btn btn-outline-danger btn-block"
            onClick={ this.handleLogin.bind(this) }>Login</button>
        </form>
        </div>
      </div>
      </div>
    );
  }
}

//<Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) } />

export default Login;



  {/* <div >
        Username: <input type="text" 
                         name="username"
                         value={ this.state.username }
                         onChange={ this.handleInput.bind(this, 'username') } />
        Password: <input type="password"
                         name="password"
                         value={ this.state.password } 
                         onChange={ this.handleInput.bind(this, 'password') } />
                         {console.log(this.state.password)}
        <button className="btn btn-danger btn-sm" onClick={ this.handleLogin.bind(this) }>Login</button>
        {/* <button className="btn btn-danger btn-sm" onClick={ this.handleLogout.bind(this) } */}
      // </div> */}