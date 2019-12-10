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
        <a id="all" className="menu-all" href="/" >All</a>
        <button id="books" className="menu-item" onClick={this.handleClick.bind(this, "books")} >Books</button>
        <button id="clothing" className="menu-item" onClick={this.handleClick.bind(this, "clothing")}>Clothing</button>
        <button id="electronics" className="menu-item" onClick={this.handleClick.bind(this, "electronics")}>Electronics</button>
        <button id="free" className="menu-item" onClick={this.handleClick.bind(this, "free")}>Free</button>
        <button id="general" className="menu-item" onClick={this.handleClick.bind(this, "general")}>General</button>
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