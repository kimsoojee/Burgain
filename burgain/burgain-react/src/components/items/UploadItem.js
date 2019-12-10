import React, { Component } from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import { addItem } from '../../redux/action/itemAction';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import UploadItemForm from './UploadItemForm';
import DayPickerInput from 'react-day-picker/DayPickerInput'; import 'react-day-picker/lib/style.css';
import './styles/uploaditem.scss';


class UploadItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: [],
      imagePreviewUrl: [],
      price: '',
      location: '',
      description: '',
      category: '',
      seller: { firstName: '', lastName: '', email: '', password: '' },
      periodFrom: '',
      periodTo: '',
      postedDate: (new Date).toISOString().slice(0, 10),
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageChange = (e) => {
    // FileList to Array
    let files = Array.from(e.target.files);

    // File Reader for Each file and and update state arrays
    files.forEach((file, i) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState(prevState => ({
          img: [...prevState.img, file],
          imagePreviewUrl: [...prevState.imagePreviewUrl, reader.result]
        }));
      }
      reader.readAsDataURL(file);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleFromChange(day) {
    this.setState({ periodFrom: day.toISOString().slice(0, 10) });
  };

  handleToChange(day) {
    this.setState({ periodTo: day.toISOString().slice(0, 10) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.title,
      // img: this.state.img,
      img: this.state.imagePreviewUrl,
      price: this.state.price,
      location: this.state.location,
      description: this.state.discription,
      category: this.state.category,
      seller: { firstName: '', lastName: '', email: '', password: '' },
      periodFrom: this.state.periodFrom,
      periodTo: this.state.periodTo,
      postedDate: this.state.postedDate,
      isSold: false,
    };
    this.props.addItem(newItem, this.props.history)
  }

  // componentDidUpdate(prevProps)
  // {
  //   if (prevProps.auth){
  //     this.fetchData(this.props.auth);
  //   }
  // }


  render() {
    const { imagePreviewUrl, periodFrom, periodTo, postedDate } = this.state;
    console.log(this.state)
    return (
      <div className="upload_outbox">
        <div className="form-outbox">
          <Form onSubmit={this.handleSubmit} className="uploadForm">
            <h3 className="upload-text"> Upload Your Item </h3>

            {/* IMAGES */}
            <Form.Group controlId="multiple-photos" >
              <Form.Control type="file" multiple onChange={this.handleImageChange} name="file" className="upload-files" />
              <div className="imagePreview">
                {imagePreviewUrl.map(
                  function (preview, i) { return <img key={i} src={preview} height={100} alt="preview" /> })}
              </div>
            </Form.Group>

            {/* TITLE */}
            <Form.Group controlId="title">
              <Form.Control type="text" placeholder="Title" onChange={this.handleChange} />
            </Form.Group>
            {/* DESCRIPTION */}
            <Form.Group controlId="description">
              <Form.Control as="textarea" rows="3" placeholder="Describe Your Item" onChange={this.handleChange} />
            </Form.Group>

            {/* AVAILABLE PERIOD */}
            <Form.Row>
              <Form.Group as={Col} controlId="period">
                <>Available(opt):</>
                <DayPickerInput dayPickerProps={{ todayButton: 'Today' }} onDayChange={this.handleFromChange} placeholder="From" />
                <DayPickerInput onDayChange={this.handleToChange} placeholder="To" />
                {periodFrom && (periodFrom >= postedDate ? null : <p> Invalid Date </p>)}
                {periodTo && (periodTo > periodFrom ? null : <> Invalid Date </>)}
              </Form.Group>
            </Form.Row>

            {/* CATEGORY */}
            <Form.Group controlId="category" >
              <Form.Control as="select" onChange={this.handleChange} required={true} >
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
                <Form.Control placeholder="Price" aria-label="Price" aria-describedby="basic-addon2" onChange={this.handleChange} />
              </InputGroup>
            </Form.Group>

            {/* LOCATION */}
            <Form.Group controlId="location">
              <Form.Control as="select" onChange={this.handleChange} >
                <option value="" >Select a Location</option>
                <option>West</option>
                <option>East</option>
                <option>Central</option>
                <option>Others</option>
              </Form.Control>
            </Form.Group>

            <Button type="submit" > Upload </Button>
          </Form>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.item.items,
    errors: state.errors,
    auth: state.auth
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: (item) => dispatch(addItem(item))
//   }
// }

UploadItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {addItem})(UploadItem)
