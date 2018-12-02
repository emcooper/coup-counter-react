import React from 'react';
import '../index.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3Coup from './Step3Coup';
import Step4 from './Step4';
import axios from 'axios';
import {baseUrl} from '../index.js';

import { Steps, } from 'antd';

const Step = Steps.Step;

class ResultsFormWizard extends React.Component {
    state = {
        currentStep: 1, 
        game: null,
        results: []
    }

    constructor(props){
        super(props);
        this._next = this._next.bind(this)
    }

    _next(data) {

        if (this.state.currentStep == 1){
            let formattedResults = data['selectedPlayers'].map(player =>{
                player['player_id'] = player['id']
                delete player['id']
                return player
            })
            this.setState({results: formattedResults})
        } else if (this.state.currentStep == 2) {
            let resultsWithWinner = this.state.results.map(result => {
                if (result['player_id'] == data['winnerId']){
                    result['winner'] = true
                } else {
                    result['winner'] = false
                }
                return result
            })
            this.setState({results: resultsWithWinner})
        } else if (this.state.currentStep == 3){
            let resultsWithGameData = this.state.results.map(result => {
                if (result['winner'] == true){
                    result['winning_card_one'] = data['winningCards'][0]
                    result['winning_card_two'] = data['winningCards'].length == 2 ? data['winningCards'][1] : null 
                } else {
                    result['winning_card_one'] = null
                    result['winning_card_two'] = null 
                }
                delete result['name']
                return result
            })
            this.setState({results: resultsWithGameData})

            axios.post(process.env.REACT_APP_BASE_API_URL + 'games/coup', {"results": resultsWithGameData})
            .then(res => {
                console.log("response:" + res);
            })
        }

        let currentStep = this.state.currentStep;

        if (currentStep >= 3) {
          currentStep = 4;
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
    let game = this.props.game;
    return(
        <div>
        <Steps current={this.state.currentStep-1}>
            <Step title="Select Players"  />
            <Step title="Select Winner"  />
            <Step title="Enter Game Data"  />
            <Step title="Done"  />
        </Steps>
            <Step1 currentStep={currentStep} afterValid={this._next} />
            <Step2 currentStep={currentStep} gamePlayers ={results} afterValid={this._next} />
            <Step3Coup currentStep={currentStep} afterValid={this._next} />
            <Step4 currentStep={currentStep} game={game} />
        </div>
    );
    }
}

export default ResultsFormWizard;