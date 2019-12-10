import React, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import './styles/entrypage.scss';


const checkModal = () => {
  let time = localStorage.getItem("entryPage");
  if (time && time == (new Date).toISOString().slice(0, 10)){
    return false;
  }
  else if (!time || time != (new Date).toISOString().slice(0, 10)){
    localStorage.setItem("entryPage", (new Date).toISOString().slice(0, 10))
    return true;
  }
}

const EntryPage = () => {
  const [show, setShow] = useState(checkModal());
  const [noButton, noButtonShow] = useState(false);
  return (
    <div>
        <Modal show={show} animation={false} onHide={() => setShow(false)} className="entryModal">
          <Modal.Body>
            <div className="logoImage">
              <img src={"http://cdn.designblognews.com/wp-content/uploads/2017/02/boston-university-logo-bu-vector-eps-free-download-logo-icons-brand-emblems-148777131548ngk.png"}
                  alt="logo" />
            </div>
            <h2>ARE YOU BU STUDENT?</h2>
            <div className="buttons"> 
              <Button onClick={() => setShow(false)}> Yes </Button>
              <Button onClick={() => noButtonShow(true)}> No </Button>
            </div>
            { noButton ? 
                // <div className="noBU">
                  <h5>We are sorry! You must be BU student to use this website.
                  While we do our best to expand our service to other universities, 
                  right now this website is for Boston University only.
                  Check us again later!</h5>
                // </div>
                : 
                <h5>You must be BU student to use this website</h5> }
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default EntryPage;

