import React, { Component } from 'react';
;

class DoctorInfo extends Component {
    
    render(){
        return (
            <div>
                <li>
                    <p>{this.props.DoctorInfo[0].prefix} {this.props.DoctorInfo[0].given } {this.props.DoctorInfo[0].family}</p>
                    <p>{this.props.Organization.name}</p>
                    <p>{this.props.Organization.address[0].line}</p>
                    <p>{this.props.Organization.address[0].city} {this.props.Organization.address[0].country}</p>
                    <p>{this.props.Organization.address[0].postalCode}</p>
                </li>
            </div>
        );
    }
}

export default DoctorInfo;