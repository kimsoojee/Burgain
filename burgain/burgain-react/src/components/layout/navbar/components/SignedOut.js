import React, { useState } from 'react';
import { Button, Modal, Tabs, Tab} from 'react-bootstrap';
import SignIn from '../../../auth/SignIn'
import SignUp from '../../../auth/SignUp'
import './styles/signedout.scss';
import { connect } from 'react-redux';

const SignedOut = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="signedout-outbox">
      <div className="notUser">
        <Button onClick={() => setShow(true)}>
          Sign in
        </Button>

        <Modal show={show} animation={false} onHide={() => setShow(false)} >
          <Tabs defaultActiveKey="signin" id="loginTab" >
            <Tab eventKey="signin" title="Sign In" >
              <SignIn setShow={setShow} />
            </Tab>
            <Tab eventKey="signup" title="Sign Up">
              <SignUp setShow={setShow} />
            </Tab>
          </Tabs>
        </Modal>
      </div>
    </div>
  )}
// }

const mapStateToProps = (state) => {
  return {
    // items: state.item.items,
    // auth: state.auth.user
  }
}

export default connect(mapStateToProps)(SignedOut);

