import React, { Component } from "react";
import "../styles/success.css";

class Success extends Component {
  render() {
    return (
      <div className="success">
        <h2>Mes badges</h2>
        <div className="badges">
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 12/12/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 12/12/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 12/12/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 12/12/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 12/12/2018</p>
            <p>30 points cumulés</p>
          </div>
          <div className="badgeItem">
            <img src="https://i.ebayimg.com/images/g/-UIAAOxymcdRf1Ie/s-l300.jpg" />
            <p>Obtenu le 12/12/2018</p>
            <p>30 points cumulés</p>
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
