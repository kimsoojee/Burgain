import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ItemDetails from './components/items/ItemDetails';
import Profile from './components/profile/Profile'
import UploadItem from './components/items/UploadItem'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/footer/Footer'
import AboutUs from './components/footer/AboutUs'
import NotFound from './components/NotFound'
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
  // state = {};
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
    var db = openDatabase("db", '1.0', "My WebSQL Database", 3 * 1024 * 1024);

    db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS customer (id integer primary key, firstname varchar(255), lastname varchar(255), email varchar(255), password varchar(255), profile varchar(1024))');
      tx.executeSql('CREATE TABLE IF NOT EXISTS products (id integer primary key, title varchar(50), description varchar(255), price integer, img LONGBLOB, category varchar(255), seller integer, location varchar(40))');
      // tx.executeSql('CREATE TABLE IF NOT EXISTS customer (id integer primary key, firstName varchar(255))');
      // var firstName="thisisfirstname"
      // tx.executeSql('insert into customer (firstName) values (?)',[firstName]);
      // tx.executeSql("SELECT firstname, lastname FROM customer", [], function(tx, results) {
      //   if(results.rows.length > 0) {
      //       for(var i = 0; i < results.rows.length; i++) {
      //           console.log("Result -> " + results.rows.item(i).firstname + " " + results.rows.item(i).lastname);
      //       }
      //   }
      // });
    }); 

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
              <Route path="/onlineShop/burgain" component={AboutUs} />
              <Route path="*" component={NotFound} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
