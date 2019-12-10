import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { getAllItems, getAllUsers } from '../../redux/action/itemAction';
import './styles/itemdetails.scss';
import { connect } from 'react-redux';

class ItemDetails extends Component {
  componentDidMount() {
    this.props.getAllItems();
    this.props.getAllUsers();
  }

  render() {
    console.log(this.props)
    const { item } = this.props;
    return(
      <div className="details_outbox">
        <div className="carousel_and_info">
          <div className="carousel_container">
            <Carousel interval={false} className="carousel">
              {item.img.map( (image,index) => { return (
                <Carousel.Item key={index} >
                  <img className="carousel-image" src={image} alt="carousel"  />
                </Carousel.Item>
              )})}
            </Carousel>
          </div>
          <div className="item_info_outbox">
            <h3 className="title"> {item.title} </h3>
            <a className="seller" href={"/onlineShop/profile/"+item.seller.id}> { item.seller.first_name }.{item.seller.last_name[0]} </a>
            <p className="price"> ${item.price} </p>
            <p className="location"> Location: {item.location} </p>
            <p className="available"> Available: FROM {item.periodFrom} TO {item.periodTo} </p>
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
    item: state.item.items.find(i => i.id == id),
    allUser: state.item.allUsers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => { dispatch(getAllUsers()) },
    getAllItems: () => { dispatch(getAllItems()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

