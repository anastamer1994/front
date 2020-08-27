import React, { Component } from 'react'

export class ValidationAuth extends Component {
    
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
      //  const {values} = this.props;

        return (
            <div>
                <h1>Validation Account </h1>
            </div>
        )
    }
}

export default ValidationAuth;
