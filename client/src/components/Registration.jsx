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
      password: this.state.password
    }

    this.props.handleRegistrationSubmit(info);

    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div className="container">
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
          <button 
            type="button" 
            className="btn btn-outline-danger my-2 my-sm-0"
            onClick={ this.handleRegister.bind(this) }>Login</button>
        </form>
      </div>
    )
  }
}

export default Registration;