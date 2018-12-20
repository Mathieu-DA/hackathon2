import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';


class Challenge extends Component {
  constructor(props) {
    super(props);
    const { } = this.props;
    this.state = {};
  }

  render() {
    const { challenges } = this.props;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Actions</th>
              <th>Lundi</th>
              <th>Mardi</th>
              <th>Mercredi</th>
              <th>Jeudi</th>
              <th>Vendredi</th>
              <th>Samedi</th>
              <th>Dimanche</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row">1</th>
              {/* {
                challenges.map((challenge, index) => (
                  <td>{challenge}</td>
                  )
                )
              } */}
                  </tr>
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </Table>
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
