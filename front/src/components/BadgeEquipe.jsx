import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PetiteGraine from "../img/PetiteGraine.png";
import JeunePousse from "../img/JeunePousse.png";
import Pissenlit from "../img/Pissenlit.png";
import Bonzai from "../img/Bonzai.png";
import Cerisier from "../img/Cerisier.png";
import Baobab from "../img/Baobab.png";

class BadgeEquipe extends Component {
  render() {
    return (
      <Container>

        <div>
          <h2>Dans mon équipe</h2>
        </div>

        <Row>
          <Col className="badgeItem2">
            <p>12 personnes ont le badge{" "}</p>
            <img src={PetiteGraine} />
            <h3>Petite graine</h3>
            
           
          </Col>

          <Col className="badgeItem2">
          <p>8 personnes ont le badge{" "}</p>
          <img src={JeunePousse} />
          <h3>Jeune Pousse</h3>
            
          </Col>
       

        
          <Col className="badgeItem2">
          <p>13 personnes ont le badge</p>
          <img src={Pissenlit} />
          <h3>Pissenlit</h3>
          
          
          </Col>

          <Col className="badgeItem2">
          <p> 5 personnes ont le badge </p>
          <img src={Bonzai} />
          <h3>Bonzaï</h3>
           
          
          </Col>
      

       
          <Col className="badgeItem2">
            <p>14 personnes ont le badge Cerisier</p>
            <img src={Cerisier} />
            <h3>Cerisier</h3>
           
          </Col>

          <Col className="badgeItem2">
          <p>2 personnes ont le badge</p>
          <img src={Baobab} />
          <h3>Baobab</h3>
            
          </Col>
      </Row>
      </Container>
    );
  }
}

export default BadgeEquipe;
