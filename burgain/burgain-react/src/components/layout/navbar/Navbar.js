import React, { Component } from 'react';
import Burger from './components/Burger';
import TopBar from './components/TopBar';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getAllItems } from '../../../redux/action/itemAction';
import './navbar.scss';


class Navbar extends Component {
  // componentDidMount() {
  //   this.props;
  // }

  render() {
    console.log("navbar", this.props)
    return (
      <div className="navbar-outbox">
        <Burger />
        <TopBar />
      </div>
    );
  }
}

// Navbar.propTypes = {
//   getAllItems: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => {
//   return {
//     item: state.item,
//     auth: state.auth,
//   }
// }

export default Navbar
// export default connect(mapStateToProps, {getAllItems})(Navbar)