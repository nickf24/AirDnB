import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-static-top navBarClean">
          <div className="container-fluid">
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Baby Got Back</button>
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

export default Navbar;


