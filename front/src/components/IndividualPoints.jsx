import React from "react";
import { connect } from "react-redux";
import "../styles/App.css";

const IndividualPoints = props => (
  <div>
    <p className="indPoints">
      J'ai cumulé <span className="Points">{props.points} points</span>. C'est
      l'équivalent d'un trajet aller-retour Paris-Lyon
    </p>
  </div>
);

const mapStatetoProps = state => ({
  points: state.individualPoints
});

export default connect(mapStatetoProps)(IndividualPoints);
