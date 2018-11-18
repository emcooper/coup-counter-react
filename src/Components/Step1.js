import React from 'react';
import '../index.css';
import { Checkbox, Row, Button, Col } from 'antd';
import axios from 'axios';
import {baseUrl} from '../index.js';

class Step1 extends React.Component {
    state = {
        players: [],
        selectedPlayers: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(baseUrl + 'players')
        .then(res => {
            const players = res.data;
            this.setState({players});
        })
    }

    validate() {
        this.props.afterValid(this.state)
      }

    onChange(player){
        this.setState(prevState => ({
            selectedPlayers: [...prevState.selectedPlayers, player]
        }))
    }


    render(){
        if (this.props.currentStep !== 1) {
            return null;
          }
        const playerCheckboxes = this.state.players.map(player =>{
            return <div><Checkbox onChange={()=> this.onChange(player)}>{player['name']}</Checkbox><br></br></div>
        });

        return (
            <Row gutter={16}>
            <Col span={10}></Col>
            <Col span={4}>
                <h1>Select Players</h1>
                <div class="checkbox-container">{playerCheckboxes}</div>
                <Button onClick={()=> this.validate()} size={"large"}  block > Next </Button>
            </Col>
            <Col span={10}></Col>
        </Row>
        );
    }
}

export default Step1;