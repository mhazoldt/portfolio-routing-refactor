import React, { Component } from 'react';
import Logo from '../logo.svg'

class References extends Component {
  render() {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <img src={Logo} alt="React" />
                </div>
            </div>
            <div className="card">
                <div className="card-body col-6">
                    <h1>References</h1>
                    
                </div>
            </div>
        </div>
    );
  }
}

export default References;