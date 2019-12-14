import React, { Component } from 'react';
import ItemList from '../items/ItemList';
import EntryPage from './EntryPage'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllItems } from '../../redux/action/itemAction';
import './styles/dashboard.scss';

class Dashboard extends Component {
  state={}
  componentDidMount() {
    this.props.getAllItems();
  }

  getItems(searched, categorized, items) {
    if (searched) {
      var list = [];
      for(var i = 0; i < searched.length; i++) {
        list.push(searched[i])
      }
      // return searched.sort((a, b) => b.posted - a.posted).map(i =>
      return list.map(i =>
              <div key={i.id} className="col-6 col-sm-4 col-md-4 col-lg-3 my-3 item">
                <ItemList item={i} />
              </div>)
    }
    else if (categorized) {
      // return categorized.sort((a, b) => b.posted - a.posted).map(i =>
      var list = [];
      for(var i = 0; i < categorized.length; i++) {
        list.push(categorized[i])
      }
      return list.map(i =>
              <div key={i.id} className="col-6 col-sm-4 col-md-4 col-lg-3 my-3 item">
                <ItemList item={i} />
              </div>)
    }
    else {
      // return items.sort((a, b) => b.posted - a.posted).map(i =>
      var list = [];
      for(var i = 0; i < items.length; i++) {
        list.push(items[i])
      }
      return list.map(i =>
      <div key={i.id} className="col-6 col-sm-6 col-md-4 col-lg-3 my-3 item">
          <ItemList item={i} />
      </div>)
    }
  }
  render() {
    const { items, searched, categorized }  = this.props.item;
    // this.props.childrendb.transaction(function (tx) {
    //   // tx.executeSql('CREATE TABLE IF NOT EXISTS customer (id integer primary key, firstName varchar(255), lastname varchar(255), email varchar(255), password varchar(255), picture varchar(1024), year integer, college, varchar(255))');
    //   // tx.executeSql('CREATE TABLE IF NOT EXISTS customer (id integer primary key, firstName varchar(255))');
    //   var firstName="thisisfirstname"
    //   tx.executeSql('insert into customer (firstName) values (?)',[firstName]);
    // });

    return (
      <div className="dashboard_outbox">
        <div className="items_outbox">
          {this.checkModal}
          <EntryPage />
          <div className="row itemlist">
            {this.getItems(searched, categorized, items)}
          </div>
          <div className="guy"><img src={require('../imgages/guy_laptop.png')} alt="img" /></div>
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