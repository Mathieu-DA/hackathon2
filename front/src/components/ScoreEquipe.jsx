import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import "../styles/ScoreEquipe.css";
import axios from 'axios';



class ScoreEquipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: '',
    }
  }

  componentWillMount() {
    console.log("youpi")

    axios.get("http://a32fdf95.ngrok.io/team")
      .then(res => {
        console.log("youpi",res.data)
        const team = res.data;
        this.setState({ team });
      })
  }


  render() {
    console.log("team", this.state.team)
    return (

     <Container>
      
      <div className="Encars">
        <p >Votre équipe a cumulé un total de</p>
        <p className="Marquage">{!this.state.team ? '' : this.state.team.realisations+this.props.monscore} points</p>
        <p>C'est l'équivalent de</p>
        <p className="Marquage">100 litres d'eau économisée <br/>
        1 trajet Lyon-Nice aller-retour en voiture 
        </p>
      </div>
    
    </Container>
    );
  }
}

const mapStatetoProps = state => ({
  monscore: state.individualPoints,
});


export default connect(mapStatetoProps, null)(ScoreEquipe);