import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import SearchView from './components/SearchView.jsx';
import Login from './components/Login.jsx';
import Listing from './components/Listing.jsx';
import HomeView from './components/HomeView.jsx';
import Navbar from './components/Navbar.jsx';
import Registration from './components/Registration.jsx';
import UserProfile from './components/UserProfile.jsx';
import ListingForm from './components/ListingForm.jsx';
import ConfirmView from './components/ConfirmView.jsx';
import UserInfo from './components/UserInfo.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 'homeView',
      currentListing: null,
      isLoggedIn: false,
      currentUser: null,
      errormsgs: []
    }
  }

  componentWillMount() {
    var app = this;
    axios.get('/authenticate')
      .then(response => {
        app.setState({isLoggedIn: response.data.loggedin});
      })
  }

  handleSearchSubmit(searchVal) {
    // nick's test
    // console.log(searchVal);
    this.setState({
      currentView: 'searchView',
      currentListing: searchVal
    })
  }
  
  handleLoginSubmit(login) {
    var app = this;
    axios.post('/login', login)
      .then(response => {
         app.setState({
           currentView: 'homeView',
           isLoggedIn: true
         })
      })
      .catch(error => {
        console.error(error.body); 
      });
  }

  handleLogout() {
    var app = this;
    axios.get('/logout')
    .then(response => {
       app.setState({
         currentView: 'homeView',
         isLoggedIn: false
       });
    })
    .catch(error => {
      console.error(error.body); 
    });
  }

  handleRegistrationSubmit(account) {
    var app = this;
    axios.post('/registration', account)
      .then(response => {
        // console.log(response);
        app.setState({
          currentView: 'userinfoView',
          isLoggedIn: true
        })
      })
      .catch(error => {
        var response = error;
        app.setState({errormsgs: error.response.data.msg});
      });
  }

  handleHostListingClick() {
    this.setState({
      currentView: 'listingFormView'
    })
  } 

  handleFormSubmit() {
    this.setState({
      currentView: 'confirmView'
    })
  }

  handleListingClick(listing) {
    this.setState({
      currentView: 'listView',
      currentListing: listing
    })
  }

  handleNavChange(view) {
    this.setState({
      currentView: view
    });
  }

  handleProfileView() {
    var app = this;
    axios.get('/profile')
      .then(response => {
        app.setState({
          currentView: 'profileView',
          currentUser: response.data
        })
      })
      .catch(error => {
        console.error(error);
      })
  }

  switchViews() {
    if (this.state.currentView === 'homeView') {
      return <HomeView searchClickFn ={ this.handleSearchSubmit.bind(this) }
                       listingClickFn={ this.handleListingClick.bind(this) } />
    } else if (this.state.currentView === 'searchView') {
      return <SearchView listingClickFn={ this.handleListingClick.bind(this) } searchTerm = {this.state.currentListing} />
    } else if (this.state.currentView === 'listView') {
      return <Listing listing={ this.state.currentListing } />
    } else if (this.state.currentView === 'loginView') {
      return <Login handleLoginSubmit={ this.handleLoginSubmit.bind(this) } />
    } else if (this.state.currentView === 'registrationView') {
      return <Registration handleRegistrationSubmit={ this.handleRegistrationSubmit.bind(this) } errors={ this.state.errormsgs } />
    } else if (this.state.currentView === 'profileView') {
      return <UserProfile user={ this.state.currentUser } handleListingClick = {this.handleListingClick.bind(this)} redirect={ this.handleNavChange.bind(this)  } />
    } else if (this.state.currentView === 'listingFormView') {
      return <ListingForm handleFormSubmit = {this.handleFormSubmit.bind(this)} />
    } else if (this.state.currentView === 'confirmView') {
      return <ConfirmView handleProfClick = {this.handleProfileView.bind(this)}/>
    } else if (this.state.currentView === 'userinfoView') {
      return <UserInfo showProfile={ this.handleProfileView.bind(this) } />
    }
  }

  render () {

    return (
        <div >
          <header>
            <Navbar isLoggedIn={ this.state.isLoggedIn } 
                    handleNavChange={ this.handleNavChange.bind(this) }
                    handleLogout={ this.handleLogout.bind(this) } 
                    handleProfileView={ this.handleProfileView.bind(this) } 
                    handleHostListing = {this.handleHostListingClick.bind(this)} />
          </header>
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