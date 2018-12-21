import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../styles/BadgeEquipe.css";
import PetiteGraine from '../img/PetiteGraine.png';
import Bonzaï from '../img/Bonzaï.png';



class BadgeEquipe extends Component {
  

render() {

return (
 


  <Container>
  
      <div>
        <p className="Equipe">Dans mon équipe,</p>
      </div>

      <Row>
        <Col className="badgeItem2">
          <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p >12 personnes ont le badge <p className="PetiteGraine">Petite graine</p></p>
        </Col>
         
        <Col className="badgeItem2">
          <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
          <p>8 personnes ont le badge <p className="JeunePousse">Jeune pousse</p></p>
        </Col>
      </Row>

      <Row>
        <Col className="badgeItem2">
          <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
          <p>13 personnes ont le badge <p className="Pissenlit">Pissenlit</p></p>
        </Col>
    
        <Col className="badgeItem2">
          <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
          <p>5 personnes ont le badge <p className="Bonsaï">Bonsaï</p></p>
        </Col>
      </Row>

      <Row>
        <Col className="badgeItem2">
          <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
          <p>14 personnes ont le badge <p className="Cerisier">Cerisier</p></p>
        </Col>

        <Col className="badgeItem2">
          <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
          <p>2 personnes ont le badge <p className="Baobab">Baobab</p></p>
        </Col>
      </Row>
  
  </Container>

    );
  }
}


export default BadgeEquipe;