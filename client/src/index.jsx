import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import SearchView from './components/SearchView.jsx';
import Login from './components/Login.jsx';
import Listing from './components/Listing.jsx';
import HomeView from './components/HomeView.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'homeView',
      currentListing: null
    }
  }


  handleSearchSubmit(searchVal) {
    // nick's test
    console.log('the searched value is', searchVal)
    this.setState({
      currentView: 'searchView'
    })
  }
  
  handleLoginSubmit(login) {
    axios.post('/login', login)
      .then(response => {
        console.log(response); 
      })
      .catch(error => {
        console.error(error); 
      });
  }

  handleListingClick(listing) {
    this.setState({
      currentView: 'listView',
      currentListing: listing
    })
  }

  switchViews() {
    if (this.state.currentView === 'homeView') {
      return <HomeView searchClickFn ={ this.handleSearchSubmit.bind(this) }
                       listingClickFn={ this.handleListingClick.bind(this) } />
    } else if (this.state.currentView === 'searchView') {
      return <SearchView listingClickFn={ this.handleListingClick.bind(this) } />
    } else if (this.state.currentView === 'listView') {
      return <Listing listing={ this.state.currentListing } />
    }
  }


  render () {

    return (
        <div>
         {/****put login in here***/}
          <div>
              {this.switchViews()}
          </div>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

 //<Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) }/>

//<Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) } />
              // <div className="container-fluid">
              //   <div className="row">
              //     <Listing />
              //   </div>
              // </div>
                        // <img src="https://files.slack.com/files-pri/T7ZKUC7EW-F8R07J085/airdnb.png" width={360} height={90} mode='fit' id="shiftLeft"/>