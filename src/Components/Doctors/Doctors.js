import React, { Component } from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';

const doctors = [];
let workplace = {};

class Doctors extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          doctors: [],
          organization: {}
        };
      }

    componentWillReceiveProps(doctorList){
        doctorList.doctorList.map(doctor => {
            fetch('http://hapi.fhir.org/baseDstu3/Practitioner/' + doctor)
            .then(response => response.json())
            .then(data => {
                doctors.push(data.name);
            });
        });

        fetch('http://hapi.fhir.org/baseDstu3/Organization/uhn')
            .then(response => response.json())
            .then(data => {
                workplace = {name: data.name, address: data.address};
                this.setState({ organization: workplace });
            });
        this.setState({ doctors: doctors });
    }

    render(){
        
        const showDoctors = [];
        for(let i=0; i < this.state.doctors.length; i++){
            showDoctors.push(<DoctorInfo key={i} DoctorInfo={this.state.doctors[i]} Organization={this.state.organization}/>)
        }
        
        return(
            <div>
                <ol>
                    {showDoctors}
                </ol>
            </div>
        );
    }
}

export default Doctors;