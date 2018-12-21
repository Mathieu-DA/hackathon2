import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ScoreEquipe from './ScoreEquipe';
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
            <Col className="BadgeEquipe" xs="12"> <BadgeEquipe /> </Col>

          </Row>

        </Container>

      </div>

    );
  }
}


export default MonEquipe;