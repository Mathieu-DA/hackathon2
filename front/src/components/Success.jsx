import React, { Component } from "react";
import "../styles/success.css";
import PetiteGraine from '../img/PetiteGraine.png';
import JeunePousse from '../img/JeunePousse.png';
import Pissenlit from '../img/Pissenlit.png';
import Bonzaï from '../img/Bonzaï.png';
import Cerisier from '../img/Cerisier.png';
import Baobab from '../img/Baobab.png';

class Success extends Component {
  render() {
    return (
      <div>
        <h2 className="TitreBadge">Mes badges</h2>
        <div className="badges">
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 12/09/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 05/10/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg"/>
            <p>Obtenu le 25/10/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 15/11/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 21/11/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 12/12/2018</p>
            <p>50 points cumulés</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
