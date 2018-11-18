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
        results: []
    }

    constructor(){
        super();
        this._next = this._next.bind(this)
    }

    _next(data) {

        if (this.state.currentStep == 1){
            let formattedResults = data['selectedPlayers'].map(player =>{
                player['playerId'] = player['id']
                delete player['id']
                return player
            })
            this.setState({results: formattedResults})
        } else if (this.state.currentStep == 2) {
            let resultsWithWinner = this.state.results.map(result => {
                if (result['playerId'] == data['winnerId']){
                    result['winner'] = true
                } else {
                    result['winner'] = false
                }
            })
            this.setState({results: resultsWithWinner})
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
    let results = this.state.results;
    return(
        <div>
        <Steps current={this.state.currentStep-1}>
            <Step title="Select Players"  />
            <Step title="Select Winner"  />
            <Step title="Enter Game Data"  />
        </Steps>
            <Step1 currentStep={currentStep} afterValid={this._next} />
            <Step2 currentStep={currentStep} gamePlayers ={results} afterValid={this._next} />
            {/* <Step3 currentStep={currentStep} afterValid={this._next} /> */}
        </div>
    );
    }
}

export default ResultsFormWizard;