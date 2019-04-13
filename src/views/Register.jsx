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

class Register extends React.Component {
  state = {
    redirectToLogin: false,
    color: '#4D2A11'
  };
  handleRegistration(e) {
    console.log("idemo");
    this.setState({ redirectToLogin: true });
  }
  handleColorChange = (color) => {
    this.setState({ color: color.hex })
  };

  render() {
    console.log(backImage);
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
                    <Form>
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="mike@email.com" type="email" />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <Input placeholder="password" type="password" />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Color for marking
                        </label>
                        <ColorPicker onChange={this.handleColorChange} color={this.state.color}/>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-fill"
                      color="primary"
                      type="submit"
                      onPointerDown={e => this.handleRegistration(e)}
                    >
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        {redirectToLogin && <Redirect to="/login" />}
      </Container>
    );
  }
}

export default Register;
