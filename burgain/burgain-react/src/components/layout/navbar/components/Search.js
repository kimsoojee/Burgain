import React, { Component } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './styles/search.scss';
import { connect } from 'react-redux';
import { filterItemBySearch } from '../../../../redux/action/itemAction';


class Search extends Component {
  handleChange = (e) => {
    const input = e.target.value
    this.props.onChange(input)
  }
  handleClick = () => {
    this.props.search(this.props.input);
  }

  render() {
    console.log("search", this)
    return (
      <div className="search-outbox">
        <InputGroup>
          <FormControl type="text" placeholder="Search" onChange={this.handleChange}/>
          <InputGroup.Append>
            <Button type="submit" onClick={ this.handleClick } > GO </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // item: state.item.items,
    // searched: state.item.searched
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (input) => { dispatch(filterItemBySearch(input)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
// export default Search