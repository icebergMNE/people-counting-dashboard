import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";
// import target from '../assets/img/untitled.svg';
import Target from '../components/Target';
import TargetList from '../components/TargetList';
import {Switch, Route} from 'react-router-dom';
class ImageMarker extends React.Component {
  state = {
    user:null,
    image:{
      url:'https://kay.tmit.bme.hu/~kovacsg/peoplecounting/DJI_0554_0.png',
      width:'10000',
      createdAt:Date.now()
    },
    marks:[
      {
        left:50, top:30, name:'Stefan', createdAt:Date.now(), color:'red'
      },
      {
        left:150, top:130, name:'Stefan', createdAt:Date.now(), color:'red'
      },
      {
        left:200, top:230, name:'Milo', createdAt:Date.now(), color:'blue'
      }
    ]
  }
  addMarkHandler(e){
    const {offsetX, offsetY} = e.nativeEvent;
    this.setState((state,props)=>{
      const newMark = {
        left:offsetX,
        top:offsetY,
        name:state.user.email,
        color:state.user.color,
        createdAt:Date.now()
      }
      return{
        marks:[...state.marks, newMark]
      }
    })
    window.localStorage.setItem('marks', JSON.stringify(this.state.marks));
    console.log('offsetY:', offsetY)
    // console.log(e);
  }

  componentDidMount(){
    const image = JSON.parse(window.localStorage.getItem('projects'))[0];
    const localMarks = window.localStorage.getItem('marks');
    const marks = localMarks? JSON.parse(localMarks): [];
    const user = JSON.parse(window.localStorage.getItem('user'));
    this.setState({
      image:{
        url:image.imageUrl,
      createdAt:Date.now(),
      width:'10000'
      }
    })
    this.setState({
      marks,
      user
    })
  }
  render() {
    const {image, marks} = this.state;
    const imageStyle = {
      width:`${image.width}px`,
      maxWidth:'unset'
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="9">
                <div style={{height:'calc(100vh - 190px)',overflow: 'scroll'}}>
                <div style={{position: 'relative'}}>
                  {marks &&(
                  marks.map((mark,index)=>(
                    <Target position={mark}  key={index}/>
                  )
                ))}
                {image && (
                  <img src={image.url} alt='main' style={imageStyle}
                  onClick={(e)=>this.addMarkHandler(e)}
                  onLoad={()=>console.log('image loaded')}/>
                )}
                </div>
                
                </div>
            </Col>
            <Col md="3">
                <TargetList targets={marks}/>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ImageMarker;
