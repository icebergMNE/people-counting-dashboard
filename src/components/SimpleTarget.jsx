import React, { Component } from "react";
class SimpleTarget extends Component {
  render() {
    const {color} = this.props;
    return (
      <svg
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
        viewBox="0 0 438.533 438.533"
        style={{fill:color}}
      >
        <path d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0 c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267 c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407 s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062 C438.533,179.485,428.732,142.795,409.133,109.203z M353.742,297.208c-13.894,23.791-32.736,42.633-56.527,56.534 c-23.791,13.894-49.771,20.834-77.945,20.834c-28.167,0-54.149-6.94-77.943-20.834c-23.791-13.901-42.633-32.743-56.527-56.534 c-13.897-23.791-20.843-49.772-20.843-77.941c0-28.171,6.949-54.152,20.843-77.943c13.891-23.791,32.738-42.637,56.527-56.53 c23.791-13.895,49.772-20.84,77.943-20.84c28.173,0,54.154,6.945,77.945,20.84c23.791,13.894,42.634,32.739,56.527,56.53 c13.895,23.791,20.838,49.772,20.838,77.943C374.58,247.436,367.637,273.417,353.742,297.208z" />
        <path d="M219.27,146.178c-20.177,0-37.401,7.139-51.678,21.411c-14.272,14.277-21.411,31.501-21.411,51.678 c0,20.175,7.135,37.402,21.411,51.673c14.277,14.277,31.504,21.416,51.678,21.416c20.179,0,37.406-7.139,51.676-21.416 c14.274-14.271,21.413-31.498,21.413-51.673c0-20.177-7.139-37.401-21.413-51.678C256.676,153.316,239.449,146.178,219.27,146.178 z" />
      </svg>
    );
  }
}

export default SimpleTarget;
