import React from 'react';
import '../index.css';
import { Checkbox, Row, Button, Col } from 'antd';
import axios from 'axios';

class Step1 extends React.Component {
    state = {
        players: [],
        selectedPlayers: []
    }

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_BASE_API_URL + 'players')
        .then(res => {
            const players = res.data;
            this.setState({players});
        })
    }

    validate() {
        console.log(this.state.selectedPlayers.length)
        this.props.afterValid(this.state)
      }

    onChange(e){
        let player = e.target.value;
        let checked = e.target.checked;
        if (checked){
            this.setState(prevState => ({
                selectedPlayers: [...prevState.selectedPlayers, player]
            }))
        } else {
            let newSelectedPlayers = this.state.selectedPlayers.filter( selectedPlayer => selectedPlayer['id'] != player['id'])
            this.setState({selectedPlayers: newSelectedPlayers})
        }
    }


    render(){
        if (this.props.currentStep !== 1) {
            return null;
          }
        const playerCheckboxes = this.state.players.map(player =>{
            return <div><Checkbox onChange={this.onChange} value={player}>{player['name']}</Checkbox><br></br></div>
        });

        return (
            <Row gutter={16}>
            <Col span={10}></Col>
            <Col span={4}>
                <h1>Select Players</h1>
                <div class="form-container">{playerCheckboxes}</div>
                <Button onClick={()=> this.validate()} size={"large"}  block > Next </Button>
            </Col>
            <Col span={10}></Col>
        </Row>
        );
    }
}

export default Step1;