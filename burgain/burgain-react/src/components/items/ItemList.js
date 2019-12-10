import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/itemlist.scss';

const ItemList = ({ item }) => {

  return(
    <Card className="card">
      <Link to={'/onlineShop/item/' + item.id} className="link">
        <Card.Img src={item.img} />
        <Card.Body>
          <Card.Title className="card-title"> {item.title} </Card.Title>
          <Card.Subtitle className="card-subtitle"> ${item.price} </Card.Subtitle>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ItemList;

