import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ItemDetails from './components/items/ItemDetails';
import Profile from './components/profile/Profile'
import UploadItem from './components/items/UploadItem'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Provider } from 'react-redux';
import store from './store'
import { SET_CURRENT_USER } from "./redux/action/types";

const currentUser = localStorage.currentUser;
if (currentUser) {
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: JSON.parse(localStorage.getItem("currentUser"))
  });
}

class App extends Component {
//   state = {};
//   componentDidMount() {
//     // setInterval(this.hello, 250);
//     setInterval(this.hello2, 250);
// }
  // hello = () => {
  //   fetch('/onlineShop/api/hello')
  //       .then(response => response.text())
  //       .then(message => {
  //           this.setState({message: message});
  //       });
  // };

  // hello2 = () => {
  //   fetch('/onlineShop/api/signin')
  //       .then(response => response.text())
  //       .then(message => {
  //           this.setState({message: message});
  //       });
  // };

  render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <h1>{this.state.message}</h1> */}
            <Switch>
              <Route exact path="/onlineShop" component={Dashboard} />
              <Route path="/onlineShop/profile/:id" component={Profile} />
              <Route path="/onlineShop/myprofile" component={Profile} />
              <Route path="/onlineShop/upload" component={UploadItem} />
              <Route path="/onlineShop/item/:id" component={ItemDetails} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
