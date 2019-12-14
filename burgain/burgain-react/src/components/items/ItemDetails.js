import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { getItemDetail, getAllUsers } from '../../redux/action/itemAction';
import './styles/itemdetails.scss';
import { connect } from 'react-redux';

class ItemDetails extends Component {
  // componentDidMount() {
  //   var iid = this.props.match.params.id
  //   this.props.getItemDetail(iid);
  // }

  findItem(){
    var iid = this.props.match.params.id
    var list = []
    for(var i = 0; i < this.props.item.length; i++) {
      list.push(this.props.item[i])
    }
    return list.find(i => i.id == iid)
  }

  // findSeller(cid){
  //   var db = openDatabase("db", '1.0', "My WebSQL Database", 3 * 1024 * 1024);
  //   db.transaction(function (tx) {
  //     tx.executeSql(`SELECT * FROM customer WHERE id="${cid}"`, [], function(tx, results) {
  //       var seller= results.rows
  //       return results.rows
  //     })
  //   })
  // }

  render() {
    const item = this.findItem()
    // var db = openDatabase("db", '1.0', "My WebSQL Database", 3 * 1024 * 1024);
    // var seller;
    // db.transaction(function (tx) {
    //   tx.executeSql(`SELECT * FROM customer WHERE id="${cid}"`, [], function(tx, results) {
    //     return results.rows;
    //   })
    // })
    return(
      <div className="details_outbox">
        <div className="carousel_and_info">
          <div className="carousel_container">
            <Carousel interval={false} className="carousel">
              {/* {item.img.map( (image,index) => { return (
                <Carousel.Item key={index} >
                  <img className="carousel-image" src={image} alt="carousel"  />
                </Carousel.Item>
              )})} */}
              <Carousel.Item  >
                  <img className="carousel-image" src={item.img} alt="carousel"  />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="item_info_outbox">
            <h3 className="title"> {item.title} </h3>
            {/* <a className="seller" href={"/onlineShop/profile/"+item.seller.id}> { item.seller }.{item.seller} </a> */}
            <p className="price"> ${item.price} </p>
            <p className="location"> Location: {item.location} </p>
            {/* <p className="available"> Available: FROM {item.periodFrom} TO {item.periodTo} </p> */}
            <p className="description">{ item.description }</p>
            <div className="btns">
              <Button> BUY </Button>
              <Button> SAVE♡ </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  return {
    item: state.item.items,
    // allUser: state.item.allUsers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getAllUsers: () => { dispatch(getAllUsers()) },
    // getAllItems: () => { dispatch(getAllItems()) }
    getItemDetail: (id) => {dispatch(getItemDetail(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

