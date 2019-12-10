import React from 'react';
// import { Button, Modal} from 'react-bootstrap';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <a href="/" >Home</a>
          <h6>Features</h6>
          <h6>Contact us</h6>
        </div>
        <div className="col">
          <h6>About</h6>
          <h6>FAQ</h6>
          <h6>Subscribe</h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

