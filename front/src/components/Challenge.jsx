import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import Checkbox from 'react-simple-checkbox';
import Popup from "reactjs-popup";
import IndividualPoints from './IndividualPoints';
import '../styles/challengeTable.css';
import { incrementPoints } from '../actions/points_action';
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
      checked: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      challenges: this.props.challenges,
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
      nextClick
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
        nextClick: nextClick + 1
      });
    }
  };

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
      nextClick
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
        nextClick: nextClick - 1
      });
    }
  };

  // incrementPoints = (n) => {
  //   this.setState({ points: this.state.points + n });
  // }
  handleChange = (weekday, index, semaine) => {
    console.log("youhou", weekday, index, semaine)
    const challenges = this.state.challenges;
    const iod = challenges[index][semaine].indexOf(weekday)
    if (iod > -1) {
      challenges[index][semaine].splice(iod, 1);
      this.props.upPoints(-1);
    } else {
      challenges[index][semaine].push(weekday);
      this.props.upPoints(1);
    }
    this.setState({ challenges })

  };

  // handleChange2 = (day, number) => {
  //   this.props.upPoints(1)
  //   this.setState({
  //     checked: {
  //       [day]: !this.state[day],
  //     }, dayNumber: {
  //       [number]: !this.state[number]
  //     }
  //   })
  // };

  render() {
    console.log(this.state.checked.thursday)
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      semaine,
      points,
      challenges
    } = this.state;
    console.log('render',challenges[0][51])
    const week = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
    return (
      <div>
        <h3>Semaine {semaine} - 2018</h3>
        <Table>
          <thead>
            <tr style={{ backgroundColor: '#6fb9a8' }}>
              <th style={{ fontSize: '1.4em' }}>Actions</th>
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
                  <th style={index % 2 === 0 ? { backgroundColor: '#F8F8F8' } : {}} scope="row">{challenge.name}
                  <Popup
                    trigger={<button className="btnDescription">?</button>}
                    position="right center"
                  >
                    {close => (
                      <div>
                        {challenge.description}
                        <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}
                  </Popup></th>
                  {week.map(weekday => (
                    <td style={index % 2 === 0 ? { backgroundColor: '#F8F8F8' } : {}}>
                      <Checkbox
                        checked={challenge[semaine].indexOf(weekday) > -1}
                        className="checkbox"
                        tickSize="3"
                        size="3"
                        color={{ tickColor: '#ffffff' }}
                        onChange={() => this.handleChange(weekday, index, semaine)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>
        <div className="buttonGroup">
          <Button className="prev" onClick={() => this.goToPrevWeek()}>
            Semaine précédente
          </Button>
          <Button className="next" onClick={() => this.goToNextWeek()}>
            Semaine suivante
          </Button>
        </div>
        <IndividualPoints />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  challenges: state.challengeList
});

const mapDispatchToProps = dispatch => ({
  upPoints: n => dispatch(incrementPoints(n)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Challenge);
