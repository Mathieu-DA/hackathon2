import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ScoreEquipe from "./ScoreEquipe";
import BadgeEquipe from "./BadgeEquipe";
import EquipeOB from "./EquipeObjectif";
import "../styles/MonEquipe.css";

class MonEquipe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Container>
          <h2>
            Faites revivre l'arbre de votre équipe et obtenez une récompense !
          </h2>
          <Row>
            <div className="Team">
              <Col sm="6" className="ScoreEquipe" xs="12">
                {" "}
                <ScoreEquipe />{" "}
              </Col>
              <Col sm="6">
                <EquipeOB />
              </Col>
            </div>
          </Row>

          <Row />
          <Row>
            <Col className="BadgeEquipe" xs="12">
              {" "}
              <BadgeEquipe />{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MonEquipe;
