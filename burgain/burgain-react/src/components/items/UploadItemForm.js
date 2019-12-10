import React, { useState } from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';


const UploadItemForm = (props) => {
//   const [validated, setValidated] = useState(false);
  
//   const handleFormSubmit = event => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);
//   };
  const { imagePreviewUrl, periodFrom, periodTo, postedDate } = props.props.state;
  return(
    // <Form noValidate validated={validated} onSubmit={handleFormSubmit} className="white">
    <Form onSubmit={props.handleSubmit} className="white">
      <h3 className="upload-text"> Upload Your Item </h3>
      
      {/* IMAGES */}
      <Form.Group controlId="multiple-photos" >
        <Form.Control required type="file" multiple onChange={props.handleImageChange} name="file" className="upload-files" />
        <div className="imagePreview">
          {imagePreviewUrl.map(
            function (preview, i) { return <img key={i} src={preview} height={100} alt="preview" /> })}
        </div>
      </Form.Group>

      {/* TITLE */}
      <Form.Group controlId="title">
        <Form.Control required type="text" placeholder="Title" onChange={props.handleChange} />
      </Form.Group>
      
      {/* DESCRIPTION */}
      <Form.Group controlId="description">
        <Form.Control required as="textarea" rows="3" placeholder="Describe Your Item" onChange={props.handleChange} />
      </Form.Group>
      
      {/* AVAILABLE PERIOD */}
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <>Available(opt):</>
          <DayPickerInput dayPickerProps={{ todayButton: 'Today' }} onDayChange={props.handleFromChange} placeholder="From" />
          <DayPickerInput onDayChange={props.props.handleToChange} placeholder="To" />
          {periodFrom && (periodFrom >= postedDate ? null : <p> Invalid Date </p>)}
          {periodTo && (periodTo > periodFrom ? null : <> Invalid Date </>)}
        </Form.Group>
      </Form.Row>

      {/* CATEGORY */}
      <Form.Group controlId="category" >
        <Form.Control required as="select" onChange={props.handleChange} required={true} >
          <option value="" >Select a Category</option>
          <option>Books</option>
          <option>Clothing</option>
          <option>Electronics</option>
          <option>Free</option>
          <option>General</option>
        </Form.Control>
      </Form.Group>

      {/* PRICE */}
      <Form.Group controlId="price">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon2">$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control required placeholder="Price" aria-label="Price" aria-describedby="basic-addon2" onChange={props.handleChange} />
        </InputGroup>
      </Form.Group>

      {/* LOCATION */}
      <Form.Group controlId="location">
        <Form.Control required as="select" onChange={props.handleChange} >
          <option value="" >Select a Location</option>
          <option>West</option>
          <option>East</option>
          <option>Central</option>
          <option>Others</option>
        </Form.Control>
      </Form.Group>
        
      <Button type="submit"> Upload </Button>
    </Form>
  )
}

export default UploadItemForm;

