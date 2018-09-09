import React, { Component } from 'react';
import Doctors from './Components/Doctors/Doctors';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      doctorIds: [],
    };
  }

  componentDidMount() {
    fetch('http://hapi.fhir.org/baseDstu3/Practitioner?family=Watson')
      .then(response => response.json())
      .then(data => {
        const doctors = data.entry.map(doctor => {
          return doctor.resource.id;
        });
        this.setState({ doctorIds: doctors });
    })
  }

  render() {
    return (
      <div className="App">
        <Doctors doctorList={this.state.doctorIds}/>
      </div>
    );
  }
}

export default App;
