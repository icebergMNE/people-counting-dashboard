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

class Login extends React.Component {
  state = {
    redirectToDashboard: false,
  };
  handleLogin(e) {
    console.log("idemo");
    this.setState({ redirectToDashboard: true });
  }
  handleColorChange = (color) => {
    this.setState({ color: color.hex })
  };

  render() {
    console.log(backImage);
    const { redirectToDashboard } = this.state;
    return (
      <Container fluid>
        <Row>
          
          <Col>
            <Row className="align-items-center" style={{ height: "100vh" }}>
              <Col md={{ size: 8, offset: 2 }}>
                <Card>
                  <CardHeader>
                    <h4 className="title">Login</h4>
                    <h5 className="mb-2 text-muted">
                    Welcome back! Please login to your account.
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
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-fill"
                      color="primary"
                      type="submit"
                      onPointerDown={e => this.handleLogin(e)}
                    >
                      Login
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
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
        </Row>
        {redirectToDashboard && <Redirect to="/admin/imagemarking" />}
      </Container>
    );
  }
}

export default Login;
