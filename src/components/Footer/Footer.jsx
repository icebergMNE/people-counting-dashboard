/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <div className="copyright">
            © {new Date().getFullYear()}

             {' Agile group C'}
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
