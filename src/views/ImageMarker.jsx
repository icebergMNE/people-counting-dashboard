import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
// import target from '../assets/img/untitled.svg';
import Target from '../components/Target';
class ImageMarker extends React.Component {
  state = {
    image:{
      url:'https://kay.tmit.bme.hu/~kovacsg/peoplecounting/DJI_0554_0.png',
      width:'10000',
      createdAt:Date.now()
    },
    marks:[
      {
        left:50, top:30
      }
    ]
  }
  addMarkHandler(e){
    const {offsetX, offsetY} = e.nativeEvent;
    this.setState((state,props)=>{
      const newMark = {
        left:offsetX,
        top:offsetY
      }
      return{
        marks:[...state.marks, newMark]
      }
    })
    console.log('offsetY:', offsetY)
    // console.log(e);
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
                    <Target position={mark} key={index}/>
                  )
                ))}
                {image && (
                  <img src={image.url} alt='main' style={imageStyle}
                  onClick={(e)=>this.addMarkHandler(e)}
                  onLoad={()=>console.log('image loaded')}
/>
                )}
                </div>
                
                </div>
            </Col>
            <Col md="3">
                <Target position={marks[0]}/>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ImageMarker;
