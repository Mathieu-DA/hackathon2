import React, { Component } from "react";
import "../styles/success.css";
import PetiteGraine from "../img/PetiteGraine.png";
import JeunePousse from "../img/JeunePousse.png";
import Pissenlit from "../img/Pissenlit.png";
import Bonzai from "../img/Bonzai.png";
import Cerisier from "../img/Cerisier.png";
import Baobab from "../img/Baobab.png";

class Success extends Component {
  render() {
    return (
      <div className="success">
        <h2 className="TitreBadge">Mes badges</h2>
        <div className="badges">
          <div className="badgeItem">
            <img src={PetiteGraine} />
            <h3>Petite Graine</h3>
            <p>
              Obtenu le 12/09/2018 <br />
              30 points cumulés
            </p>
          </div>
          <div className="badgeItem">
            <img src={JeunePousse} />
            <h3>Jeune Pousse</h3>
            <p>
              Obtenu le 12/09/2018 <br />
              30 points cumulés
            </p>
          </div>
          <div className="badgeItem">
            <img src={Pissenlit} />
            <h3>Pissenlit</h3>
            <p>
              Obtenu le 12/09/2018 <br />
              30 points cumulés
            </p>
          </div>
          <div className="badgeItem">
            <img src={Cerisier} />
            <h3>Cerisier</h3>
            <p>
              Obtenu le 12/09/2018 <br />
              30 points cumulés
            </p>
          </div>
          <div className="badgeItem">
            <img src={Bonzai} />
            <h3>Bonzaï</h3>
            <p>
              Obtenu le 12/09/2018 <br />
              30 points cumulés
            </p>
          </div>
          <div className="badgeItem">
            <img src={Baobab} />
            <h3>Baobab</h3>
            <p>
              Obtenu le 12/09/2018 <br />
              30 points cumulés
            </p>
          </div>
        </div>
        <div className="reussites">
          <h2>Mes nouvelles habitudes</h2>
          <div className="reussiteItem">
            <div className="circle">1</div>
            <div className="reussiteText">Ma réussite numéro 1</div>
          </div>
          <div className="reussiteItem">
            <div className="circle">2</div>
            <div className="reussiteText">Ma réussite numéro 2</div>
          </div>
          <div className="reussiteItem">
            <div className="circle">3</div>
            <div className="reussiteText">Ma réussite numéro 3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
