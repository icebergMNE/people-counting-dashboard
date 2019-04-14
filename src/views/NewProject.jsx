import React, { Component } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import ImageUploader from "react-images-upload";

class NewProject extends Component {
  state = {
    pictures: []
  };

  onDrop = picture => {
    if (picture.length > 0) {
      this.setState((prev, currrent) => {
        return {
          pictures: [...prev.pictures, picture]
        };
      });
    } else {
      this.setState({ pictures: [] });
    }
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Choose image and name for new project</CardTitle>
                </CardHeader>
                <CardBody>
                <Form>
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Project name
                        </label>
                        <Input placeholder="name" type="text" />
                      </FormGroup>
                    </Form>
                  <ImageUploader
                    withIcon={true}
                    withPreview={true}
                    buttonText="Choose image"
                    onChange={this.onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={11242880}
                    singleImage={true}
                    fileContainerStyle={{backgroundColor:'#1e1e27'}}
                  />
                </CardBody>
                <CardFooter>
                <Button
                      className="btn-fill"
                      color="primary"
                      type="submit"
                      // onPointerDown={e => this.handleRegistration(e)}
                    >
                      Create
                    </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default NewProject;
