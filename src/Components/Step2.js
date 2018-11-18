import React from 'react';
import '../index.css';
import { Checkbox, Row, Button, Col } from 'antd';
import axios from 'axios';
import {baseUrl} from '../index.js';

class Step2 extends React.Component {
    state = {

    }

    constructor(props) {
        super(props);
    }


    validate() {
        this.props.afterValid(this.state)
      }

    onChange(player){
        // this.setState(prevState => ({
        //     selectedPlayers: [...prevState.selectedPlayers, player]
        // }))
    }


    render(){
        if (this.props.currentStep !== 2) {
            return null;
          }
        // const playerCheckboxes = this.state.players.map(player =>{
        //     return <div><Checkbox onChange={()=> this.onChange(player)}>{player['name']}</Checkbox><br></br></div>
        // });

        return (
            <Row gutter={16}>
            <Col span={10}></Col>
            <Col span={4}>
                <h1>Select Winner</h1>
                <Button onClick={()=> this.validate()} size={"large"}  block > Next </Button>
            </Col>
            <Col span={10}></Col>
        </Row>
        );
    }
}

export default Step2;