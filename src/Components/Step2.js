import React from 'react';
import '../index.css';
import { Checkbox, Row, Button, Col, Radio, Input  } from 'antd';
import axios from 'axios';
import {baseUrl} from '../index.js';

const RadioGroup = Radio.Group;

class Step2 extends React.Component {
    state = {
        winnerId: null
    }

    constructor(props) {
        super(props);
    }


    validate() {
        this.props.afterValid(this.state)
      }

      onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            winnerId: e.target.value,
        });
      }


    render(){
        if (this.props.currentStep !== 2) {
            return null;
          }

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        
        const playerRadios = this.props.gamePlayers.map(player =>{
            return <Radio style={radioStyle} value={player['playerId']}>{player['name']}</Radio>
        });

        return (
            <Row gutter={16}>
            <Col span={10}></Col>
            <Col span={4}>
                <h1>Select Winner</h1>
                <div class="form-container">
                    <RadioGroup onChange={this.onChange} value={this.state.winnerId}>
                        {playerRadios}
                    </RadioGroup>
                </div>
                <Button onClick={()=> this.validate()} size={"large"}  block > Next </Button>
            </Col>
            <Col span={10}></Col>
        </Row>
        );
    }
}

export default Step2;