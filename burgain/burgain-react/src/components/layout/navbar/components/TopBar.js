import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import Search from './Search';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import './styles/topbar.scss'
import { signOut } from "../../../../redux/action/authAction";
import { logicalExpression } from '@babel/types';


class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  signOut() {
    this.props.signOut();
    window.location.href = "/onlineShop";
  }

  handleChange = (s) => {
    this.setState({
      input: s
    })
  }
  render() {
    return (
      <div className="topbar-outbox">
        <div className="logo">
           <a href="/onlineShop">
            <img className="pic"
              src={require('../../../imgages/BURGAINlogo.jpg')}
              alt="logo"/>
          </a>
        </div>
        <div className="search">
          <Search 
            input={this.state.input} 
            onChange={this.handleChange}
            history={this.props.history}
          />
        </div>
        
        <div className="sell-outbox">
          <div className="sell">
            <a href="/onlineShop/upload"> <img src={require('../../../imgages/sell.png')} alt="sell" /> </a>
          </div>
        </div>
        
        {this.props.auth.validToken ? (<div className="user"> <SignedIn props={this.props}/> </div>) : (<div className="user"> <SignedOut  /> </div> )}
        {/* {this.props.auth.user==={} && <div className="user"> <SignedOut /> </div>} */}        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

TopBar.propTypes = {
  signOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {signOut})(TopBar)