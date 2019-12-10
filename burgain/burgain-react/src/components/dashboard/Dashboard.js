import React, { Component } from 'react';
import ItemList from '../items/ItemList';
import EntryPage from './EntryPage'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllItems } from '../../redux/action/itemAction';
import './styles/dashboard.scss';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  getItems(searched, categorized, items) {
    if (searched) {
      return searched.sort((a, b) => b.posted - a.posted).map(i =>
              <div key={i.id} className="col-6 col-sm-4 col-md-4 col-lg-3 my-3 item">
                <ItemList item={i} />
              </div>)
    }
    else if (categorized) {
      return categorized.sort((a, b) => b.posted - a.posted).map(i =>
              <div key={i.id} className="col-6 col-sm-4 col-md-4 col-lg-3 my-3 item">
                <ItemList item={i} />
              </div>)
    }
    else {
      return items.sort((a, b) => b.posted - a.posted).map(i =>
              <div key={i.id} className="col-3 col-sm-4 col-md-4 col-lg-3 my-3 item">
                <ItemList item={i} />
              </div>)
    }
  }
  render() {
    const { items, searched, categorized }  = this.props.item;
    return (
      <div className="dashboard_outbox">
        <div className="items_outbox">
          {this.checkModal}
          <EntryPage />
          <div className="row itemlist">
            {this.getItems(searched, categorized, items)}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getAllItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {getAllItems})(Dashboard)