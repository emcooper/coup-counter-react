import React from 'react';
import '../index.css';
import Step1 from './Step1';
import Step2 from './Step2';

import { Steps, } from 'antd';

const Step = Steps.Step;

class ResultsFormWizard extends React.Component {
    state = {
        currentStep: 1, 
        game: null,
        gamePlayers: []
    }

    constructor(){
        super();
        this._next = this._next.bind(this)
    }

    _next(data) {

        if (currentStep == 1){
            this.setState({gamePlayers: data['selectedPlayers']})
        }

        let currentStep = this.state.currentStep;

        if (currentStep >= 2) {
          currentStep = 3;
        } else {
          currentStep = currentStep + 1;
        }

        this.setState({
            currentStep: currentStep
          });
    }

    render() {

    let currentStep = this.state.currentStep;
    return(

        <div>
        <Steps current={this.state.currentStep-1}>
            <Step title="Select Players"  />
            <Step title="In Progress"  />
            <Step title="Waiting"  />
        </Steps>
            <Step1 currentStep={currentStep} afterValid={this._next} />
            <Step2 currentStep={currentStep} afterValid={this._next} />
            {/* <Step3 currentStep={currentStep} afterValid={this._next} /> */}
        </div>
    );
    }
}

export default ResultsFormWizard;