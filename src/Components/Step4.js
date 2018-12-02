import React from 'react';
import '../index.css';
import { Checkbox, Row, Button, Col, Radio, Input  } from 'antd';


const RadioGroup = Radio.Group;

class Step4 extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        if (this.props.currentStep !== 4) {
            return null;
        }

        return (
            <Row gutter={16}>
            <Col span={10}></Col>
            <Col span={4}>
                <h1>Thanks for submitting results for {this.props.game}!</h1>
            </Col>
            <Col span={10}></Col>
        </Row>
        );
    }
}

export default Step4;