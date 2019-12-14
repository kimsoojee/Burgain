import React from 'react';
import ShowMoreText from 'react-show-more-text';
// import { Button, Modal} from 'react-bootstrap';
import './notfound.scss';

const NotFound = () => {
  return (
    <div className="error">
      <div className="oof"> 
        <img src={require('../imgages/oof.jpg')} alt="oof" /> 
      </div>
      <div className="msg">
        <h1 >Oof.</h1>
        <h4>Sorry, we couldn't find that. <br/> Try searching or go to our <a href='/onlineShop'>home page</a></h4>
      </div>
    </div>
  )
}

export default NotFound;

