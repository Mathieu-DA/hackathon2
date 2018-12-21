import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../styles/ScoreEquipe.css";



class ScoreEquipe extends Component {
  

render() {

return (

     <Container>
      
      <div className="Encars">
        <p >Votre équipe a cumulé un total de</p>
        <p className="Marquage">246 points</p>
        <p>C'est l'équivalent de</p>
        <p className="Marquage">100 litres d'eau économisée <br/>
        1 trajet Lyon-Nice aller-retour en voiture 
        </p>
      </div>
    
    </Container>
    );
  }
}


export default ScoreEquipe;