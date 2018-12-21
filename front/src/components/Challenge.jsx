import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, ButtonGroup, Button } from 'reactstrap';
import Checkbox from 'react-simple-checkbox';
import '../styles/challengeTable.css';
// import moment from 'moment';
// import 'moment/locale/fr';

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: 17,
      tuesday: 18,
      wednesday: 19,
      thursday: 20,
      friday: 21,
      saturday: 22,
      sunday: 23,
      semaine: 51,
      prevClick: 0,
      nextClick: 0,
    };
  }

  goToPrevWeek = () => {
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      semaine,
      prevClick,
      nextClick,
    } = this.state;
    if (prevClick > -2) {
      this.setState({
        monday: monday - 7,
        tuesday: tuesday - 7,
        wednesday: wednesday - 7,
        thursday: thursday - 7,
        friday: friday - 7,
        saturday: saturday - 7,
        sunday: sunday - 7,
        semaine: semaine - 1,
        prevClick: prevClick - 1,
        nextClick: nextClick + 1,
      });
    }
  }

  goToNextWeek = () => {
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      semaine,
      prevClick,
      nextClick,
    } = this.state;
    if (prevClick < 0) {
      this.setState({
        monday: monday + 7,
        tuesday: tuesday + 7,
        wednesday: wednesday + 7,
        thursday: thursday + 7,
        friday: friday + 7,
        saturday: saturday + 7,
        sunday: sunday + 7,
        semaine: semaine + 1,
        prevClick: prevClick + 1,
        nextClick: nextClick - 1,
      });
    }
  }

  render() {
    const { challenges } = this.props;
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      semaine,
    } = this.state;
    return (
      <div>
        <h3>
          Semaine
          {' '}
          {semaine}
          {' '}
          -
          {' '}
          2018
        </h3>
        <Table>
          <thead>
            <tr style={{ backgroundColor: '#ADFF2F' }}>
              <th>Actions</th>
              <th>Lundi <br /> {monday} décembre</th>
              <th>Mardi <br /> {tuesday} décembre</th>
              <th>Mercredi <br /> {wednesday} décembre</th>
              <th>Jeudi <br /> {thursday} décembre</th>
              <th>Vendredi <br /> {friday} décembre</th>
              <th>Samedi <br /> {saturday} décembre</th>
              <th>Dimanche <br /> {sunday} décembre</th>
            </tr>
          </thead>
          <tbody>
            {
              challenges.map((challenge, index) => (
                <tr>
                  <th scope="row">{challenge}</th>
                  <td><Checkbox tickSize="3" size="3" color={{ tickColor: "#ffffff" }} name="lundi" value="Bike" /></td>
                  <td><Checkbox tickSize="3" size="3" color={{ tickColor: "#ffffff" }} name="mardi" value="Bike" /></td>
                  <td><Checkbox tickSize="3" size="3" color={{ tickColor: "#ffffff" }} name="mercredi" value="Bike" /></td>
                  <td><Checkbox tickSize="3" size="3" color={{ tickColor: "#ffffff" }} name="jeudi" value="Bike" /></td>
                  <td><Checkbox tickSize="3" size="3" color={{ tickColor: "#ffffff" }} name="vendredi" value="Bike" /></td>
                  <td><Checkbox tickSize="3" size="3" color={{ tickColor: "#ffffff" }} name="samedi" value="Bike" /> </td>
                  <td><Checkbox tickSize="3" size="3" color={{ tickColor: "#ffffff" }} name="dimanche" value="Bike" /></td>
                </tr>
              ))}
          </tbody>
        </Table>
        <div className="buttonGroup">
          <Button className="prev" onClick={() => this.goToPrevWeek()}>Semaine précédente</Button>
          <Button className="next" onClick={() => this.goToNextWeek()}>Semaine suivante</Button>
        </div>
        <p>J'ai cumulé 123 points. C'est l'équivalent d'un trajet allez-retour Paris-Lyon</p>
      </div>
    );
  }
}


const mapStatetoProps = state => ({
  challenges: state.challengeList,
});

// const mapDispatchToProps = dispatch => ({
//   action: content => dispatch(actoin(content)),
// });

export default connect(mapStatetoProps, null)(Challenge);
