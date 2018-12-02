import React from 'react';
import '../index.css';
import { Checkbox, Row, Button, Col, Radio, Input  } from 'antd';


const RadioGroup = Radio.Group;

class Step3Coup extends React.Component {
    state = {
       winningCards: []
    }

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }


    validate() {
        this.props.afterValid(this.state)
    }

    onChange(e) {
        let card = e.target.value;
        let checked = e.target.checked;

        if (checked){
            this.setState(prevState => ({
                winningCards: [...prevState.winningCards, card]
            }))
        } else {
            let newWinningCards = this.state.winningCards.filter( winningCard => winningCard != card)
            this.setState({winningCards: newWinningCards})
        }
    }


    render(){
        if (this.props.currentStep !== 3) {
            return null;
          }

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        
        const cards = ['Duke', 'Contessa', 'Assassin', 'Captain', 'Ambassador']

        const cardCheckboxes = cards.map(card =>{
            return <div><Checkbox onChange={this.onChange} value={card}>{card}</Checkbox><br></br></div>
        });

        return (
            <Row gutter={16}>
            <Col span={10}></Col>
            <Col span={4}>
                <h1>Enter Game Data</h1>
                <div class="form-container">
                    <h3>What were the winning cards?</h3>
                    {cardCheckboxes}
                </div>
                <Button onClick={()=> this.validate()} size={"large"}  block > Submit </Button>
            </Col>
            <Col span={10}></Col>
        </Row>
        );
    }
}

export default Step3Coup;