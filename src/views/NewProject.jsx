import React, { Component } from "react";
// import Algorithmia from "algorithmia";

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
  Button,
  Spinner
} from "reactstrap";
import {GridLoader} from 'react-spinners';
import NotificationAlert from "react-notification-alert";
import { Redirect } from "react-router-dom";


class NewProject extends Component {
  state = {
    name:'',
    imageUrl:'',
    loading:false,
    algoritmiaCount:0,
    counted: false,
    redirectToProjects: false
  };

  notify = (message, color) => {
    const options = {
      place: 'tr',
      message: (
        <div>
          <div>
            {message}
          </div>
        </div>
      ),
      type: color,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 3
    };
    this.refs.notificationAlert.notificationAlert(options);
  }

  onCount = () =>{
    const {imageUrl, name} = this.state;
    console.log('works')
    if(imageUrl && name){
        this.notify('Counting started...', 'primary');
        // https://kay.tmit.bme.hu/~kovacsg/peoplecounting/DJI_0554_0.png
        var input = {
          image: imageUrl
        };
        this.setState({loading:true})
        var client = window.Algorithmia.client("simXS0H51lerCR84VnapyHxmm8F1");
        client.algo("deeplearning/CrowdCounter/0.3.0?timeout=300").pipe(input).then((output) =>{
          // this.setState({
          //   loading:false,
          //   counted:true,
          //   algoritmiaCount:output.result.count
          // })

          if(output.error){
            return console.error("error: " + output.error);
          }
          else{
             this.setState({
            loading:false,
            counted:true,
            algoritmiaCount:output.result.count
          })
          console.log(output.result.count);

          }
          // this.setState({
          //   loading:false,
          //   counted:true,
          //   algoritmiaCount:output.result
          // })
          // console.log(output.result);
        });

    }else{
      this.notify('Please provide data!', 'warning');
    }
    
  }
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
  handleInputChange = (event)=> {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onCreate = (e) => {
    const {name, imageUrl, algoritmiaCount} = this.state;
    const projects = [];
    projects.push({
      name, imageUrl, algoritmiaCount
    })
    window.localStorage.setItem('projects', JSON.stringify(projects));
    this.setState({redirectToProjects: true});

    // Algorithmia.client("simXS0H51lerCR84VnapyHxmm8F1")
    //   .algo("deeplearning/CrowdCounter/0.3.0?timeout=300") // timeout is optional
    //   .pipe(input)
    //   .then(function(response) {
    //     console.log(response.get());
    //   });
  }
  render() {
    const {name, imageUrl, loading, algoritmiaCount, counted, redirectToProjects} = this.state;
    return (
      <>
      <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
      </div>
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
                        <Input placeholder="name" type="text" value={name} name="name" onChange={this.handleInputChange}/>
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Image url
                        </label>
                        <Input placeholder="image url" type="text" value={imageUrl} name="imageUrl" onChange={this.handleInputChange}/>
                      </FormGroup>
                      {loading? (
                        <div style={{display: "flex", alignItems:'center', flexDirection:'column'}}>
                          <GridLoader
                          sizeUnit={"px"}
                          size={15}
                          color={'#fff'}
                          loading={loading}
                        />
                        <h5 style={{margin:'24px '}}>Algorithm counting...</h5>
                        </div>
                        
                      ): (
                        <div style={{display: "flex", alignItems:'center', flexDirection:'column'}}>
                          <h3>Alghoritm count</h3>
                          <h2>{algoritmiaCount}</h2>
                        </div>
                      )}
                    </Form>
                </CardBody>
                <CardFooter>
                {!counted? (
<Button
                      className="btn-fill"
                      color="primary"
                      type="submit"
                      onClick={this.onCount}
                    >
                      Count
                    </Button>
                ): (
                  <Button
                      className="btn-fill"
                      color="primary"
                      type="submit"
                      onClick={this.onCreate}
                      // onPointerDown={e => this.handleRegistration(e)}
                    >
                      Create
                    </Button>
                )}
                
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
        {redirectToProjects && <Redirect to="/admin/dashboard" />}

      </>
    );
  }
}

export default NewProject;
