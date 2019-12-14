import React from 'react';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <a href="/onlineShop" >Home</a>
          <a href="/onlineShop/burgain">FAQ</a>
        </div>
        <div className="col">
          <a href="/onlineShop/burgain" >About</a>
          <a>Contact us</a>
        </div>
      </div>
      <div className="subscribe">
        <span>get lastest updates!</span>
        <InputGroup>
          <FormControl type="text" placeholder="Email Address" />
          <Button type="submit" > Subscribe </Button>
        </InputGroup>
      </div>
      <div className="name">
        ©BURGAIN
      </div>
    </footer>
  )
}

export default Footer;

