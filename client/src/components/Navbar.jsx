import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {

  render () {
    return (
      <div>
        <nav className="navbar navbar-static-top navBarClean">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
                  <li id="changeToRed">Home</li>
              </ul>
              <form className="navbar-form navbar-right form-inline">
                  <div className="form-group">
                    <input className="form-control mr-sm-2" type="text" placeholder="User"/>
                    <input className="form-control mr-sm-2" type="text" placeholder="Password"/>
                  </div>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Login</button>
              </form>
          </div>
        </nav> 
      </div>
    )
  } 
}

ReactDOM.render(<Navbar />, document.getElementById('navbar'));


