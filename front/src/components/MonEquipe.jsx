import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScoreEquipe from './ScoreEquipe';
import EquipeObjectif from './EquipeObjectif';
import BadgeEquipe from './BadgeEquipe';
import "../styles/MonEquipe.css";



class MonEquipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

        <Container>
          <div className="Team">
          <Row>
            <Col className="ScoreEquipe" xs="12"> <ScoreEquipe /> </Col>
          </Row>
          </div>
          <Row>
            <Col className="EquipeObjectif" xs="6"> <EquipeObjectif /> </Col>
            <Col className="BadgeEquipe" xs="6"> <BadgeEquipe /> </Col>

          </Row>

        </Container>

      </div>

    );
  }
}


export default MonEquipe;