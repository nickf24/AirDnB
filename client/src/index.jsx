import React from 'react';
import ReactDOM from 'react-dom';





class App extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	return (

  	  <div> Hey this is a rendered React App page 

  	  <p> Hey guys </p>
  	  </div>

  	)
  }
}









ReactDOM.render(<App />, document.getElementById('app'));
