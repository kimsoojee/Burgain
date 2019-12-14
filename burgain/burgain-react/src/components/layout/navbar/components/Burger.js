import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './styles/burger.css';
import { connect } from 'react-redux';
import { filterItemByCategory } from '../../../../redux/action/itemAction';

class Burger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  handleClick = (id) => {
    this.props.category(id)
    this.setState({menuOpen: false})
    // this.props.history.push("/")
  }
  render() {
    return (
      <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
        <a id="all" className="menu-all" href="/onlineShop" >All</a>
        <button id="apparel" className="menu-item" onClick={this.handleClick.bind(this, "apparel")}>
            <img src={require('../../../imgages/apparel.png') } alt="apparel" width={20} />
            <span style={{paddingLeft: '1rem'}} >Apparel</span> 
        </button>
        <button id="books" className="menu-item" onClick={this.handleClick.bind(this, "books")} > 
            <img src={require('../../../imgages/books.png') } alt="books" width={15} />
            <span style={{paddingLeft: '1.3rem'}} >Books</span> 
        </button>
        <button id="electronics" className="menu-item" onClick={this.handleClick.bind(this, "electronics")}>
            <img src={require('../../../imgages/electronics.png') } alt="electronics" width={20} /> 
            <span style={{paddingLeft: '1rem'}} >Electronics</span> 
        </button>
        <button id="free" className="menu-item" onClick={this.handleClick.bind(this, "free")}>
            <img src={require('../../../imgages/free.png') } alt="free" width={10} /> 
            <span style={{paddingLeft: '1.7rem'}} >Free</span> 
        </button>
        <button id="furniture" className="menu-item" onClick={this.handleClick.bind(this, "furniture")}>
            <img src={require('../../../imgages/furniture.png') } alt="furniture" width={20} /> 
            <span style={{paddingLeft: '1rem'}} >Furniture </span>
        </button>
        <button id="general" className="menu-item" onClick={this.handleClick.bind(this, "general")}>
          <img src={require('../../../imgages/general.png') } alt="general" width={20} /> 
          <span style={{paddingLeft: '1rem'}} >General</span> 
        </button>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorized: state.item.categorized
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    category: (Category) => { dispatch(filterItemByCategory(Category)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Burger);