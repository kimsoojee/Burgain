import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const SignedIn = (props) => {
  return (
    <div className="user-outbox">
      <div className="user">
        <NavDropdown title={`Hello, ${props.props.auth.user[0].firstName}`}>
        <NavDropdown.Item href={'/onlineShop/profile/'+props.props.auth.user[0].id}>
            Profile
        </NavDropdown.Item>
        <NavDropdown.Item href='/onlineShop' onClick={() => props.props.signOut()}>
            Sign Out
        </NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  )
}

export default SignedIn;

