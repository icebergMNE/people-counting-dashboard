import React from "react";
// import { Route, Switch } from "react-router-dom";
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import { Redirect } from "react-router-dom";

import backImage from "../assets/img/login.jpg";
import ColorPicker from "../components/ColorPicker";
import {register} from '../apiService';

class Register extends React.Component {
  state = {
    redirectToLogin: false,
    password:'',
    email:'',
    color: '#4D2A11'
  };
  handleRegistration=(e)=> {
    e.preventDefault();

    const {email, color} = this.state;
    window.localStorage.setItem('user', JSON.stringify({email, color}));
    this.setState({redirectToLogin: true});
    // this.setState({ redirectToLogin: true });
  }
  handleColorChange = (color) => {
    this.setState({ color: color.hex })
  };
  handlePasswordChange=(event) =>{
    this.setState({password: event.target.value});
  }
  handleEmailChange=(event) =>{
    this.setState({email: event.target.value});
  }
  render() {
    const { redirectToLogin } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col
            className="align-items-center"
            style={{
              padding: 0,
              backgroundImage: `url(${backImage})`,
              backgroundPositionY: "bottom",
              backgroundSize: "cover",
              display:"flex",
              justifyContent:'center'
            }}
          >
            <h1 className="title" style={{textShadow: '3px 2px 5px #020202', fontSize:'50px'}}>People counting</h1>
          </Col>
          <Col>
            <Row className="align-items-center" style={{ height: "100vh" }}>
              <Col md={{ size: 8, offset: 2 }}>
                <Card>
                  <CardHeader>
                    <h4 className="title">Profile registration</h4>
                    <h5 className="mb-2 text-muted">
                      Please complete to create your account.
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleRegistration}>
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="mike@email.com" type="email" required value={this.state.email} onChange={this.handleEmailChange}/>
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <Input placeholder="password" type="password" required value={this.state.password} onChange={this.handlePasswordChange}/>
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Color for marking
                        </label>
                        <ColorPicker onChange={this.handleColorChange} color={this.state.color}/>
                      </FormGroup>
                      <FormGroup>
                        <Button
                          className="btn-fill"
                          color="primary"
                          type="submit"
                    >
                      Register
                    </Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        {redirectToLogin && <Redirect to="/admin" />}
      </Container>
    );
  }
}

export default Register;
