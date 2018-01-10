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
    console.log('click!');
  }

  render() {
    return(
      <div>
        Username: <input type="text" 
                         name="username"
                         value={ this.state.username }
                         onChange={ this.handleInput.bind(this, 'username') } />
        Password: <input type="password"
                         name="password"
                         value={ this.state.password } 
                         onChange={ this.handleInput.bind(this, 'password') } />
                         {console.log(this.state.password)}
        <button onClick={ this.handleLogin.bind(this) } >Login</button>
      </div>
    );
  }
}

export default Login;