import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import image1 from "../img/1.png";
import image2 from "../img/2.png";
import image3 from "../img/3.png";
import image4 from "../img/4.png";
import "../styles/EquipeObjectif.css";

class EquipeObjectif extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <div className="arbre">
              <Row className="image1">
                <img src={image1} />
              </Row>
              <Row className="image2">
                <img src={image4} />
              </Row>
              <Row className="image3">
                <img src={image3} />
              </Row>
              <Row className="image4">
                <img src={image2} />
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default EquipeObjectif;
