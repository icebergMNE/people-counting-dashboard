import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  CardFooter
} from "reactstrap";
import {Link} from 'react-router-dom';
// core components

class Dashboard extends React.Component {
  state = {
    projects:[]
  } 
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  componentDidMount(){
    this.setState({
      projects: JSON.parse(window.localStorage.getItem('projects'))
    })
  }
  render() {
    const {projects} = this.state;
    return (
      <>
        <div className="content">
          <Row>
          {projects && projects.length>0 && projects.map(project=>{

            return(
              <Col lg="4" key={project.name}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">{project.name}</h5>
                  <CardTitle tag="h3">
                  Counted
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    {project.algoritmiaCount}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <img src={project.imageUrl} alt=""/>
                </CardBody>
                <CardFooter>
                <Link to={"/admin/imagemarking"}>
                  <Button>Count manually</Button>
                </Link>
                </CardFooter>
              </Card>
            </Col>
            )
          })}
            
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
