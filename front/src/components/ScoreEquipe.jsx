import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../styles/ScoreEquipe.css";



class ScoreEquipe extends Component {
  

render() {

return (

  <div>
     <Container>
      
      <div>
        <p>Le score de votre équipe :</p>
        <p className="NombrePoints">482 points</p>
        <p>C'est l'équivalent de :</p>
        <p>3 noix de coco bien juteuses</p>
      </div>
    
    </Container>
  </div>
    );
  }
}


export default ScoreEquipe;