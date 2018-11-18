
import React from 'react';
import { Card, Row, Button, Col } from 'antd';
import '../index.css';
import axios from 'axios';
import {baseUrl} from '../index.js';
import ResultsFormWizard from './ResultsFormWizard';

const { Meta } = Card;

class SelectGame extends React.Component {

    state = {
        games: [],
        selectedGame: null
    }

    handClick(gameName) {
        this.setState({selectedGame: gameName})
    }
    
    componentDidMount() {
        axios.get(baseUrl)
        .then(res => {
            const games = res.data;
            this.setState({games});
        })
    }

    render() {
        if(this.state.selectedGame != null){
            return (
                <ResultsFormWizard></ResultsFormWizard>
            );
        }

        const gameButtons = this.state.games.map(game => {
            return <Button onClick={ ()=> this.handClick(game['name'])} size={"large"}  block >{game['name']}</Button>
        });


        return (
            <Row gutter={16}>
                <Col span={8}></Col>
                <Col span={8}>
                    {gameButtons}
                </Col>
                <Col span={8}></Col>
            </Row>
    );
    }


}

export default SelectGame;