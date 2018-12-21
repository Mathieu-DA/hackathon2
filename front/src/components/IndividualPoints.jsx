import React from 'react';
import { connect } from 'react-redux';

const IndividualPoints = props => (
  <div>
    <p>J'ai cumulé {props.points} points. C'est l'équivalent d'un trajet allez-retour Paris-Lyon</p>
  </div>
);

const mapStatetoProps = state => ({
  points: state.individualPoints,
});

export default connect(mapStatetoProps)(IndividualPoints);
