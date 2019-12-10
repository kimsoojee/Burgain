import React, { Component }  from 'react';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { signIn } from "../../redux/action/authAction";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passowrd: '',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const SigninRequest = {
      email: this.state.email+"@bu.edu",
      password: this.state.password
    };
    this.props.signIn(SigninRequest);
    this.props.setShow(false)
  }

  componentDidMount() {
    if (this.props.auth.validToken) {
      this.props.history.push("/onlineShop");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.validToken) {
      this.props.history.push("/onlineShop");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { setShow } = this.props
    return (
      <div>
        <Modal.Body>
          <Form className="white" onSubmit={this.handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label className="email"> Email </Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Email" onChange={this.handleChange} />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">@bu.edu</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="password"> Password </Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
            </Form.Group>
            
            <Form.Group className="input-field">
              <Button className="cl" onClick={() => setShow(false)} >Close</Button>
              <Button className="signin_button" type="submit"  >Sign In</Button>
            </Form.Group>
          </Form>      
        </Modal.Body>
      </div>
    )
  }
}



SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect( mapStateToProps, { signIn } )(SignIn);
