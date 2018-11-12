
import React from 'react';
import { Card, Row, Button, Col } from 'antd';
import '../index.css';
import axios from 'axios';
import {baseUrl} from '../index.js';

const { Meta } = Card;

class SelectGame extends React.Component {

    state = {
        games: []
      }
    
      componentDidMount() {
        axios.get(baseUrl)
        .then(res => {
            const games = res.data;
            this.setState({games});
            console.log(res);
        })
      }





    render() {

        const gameButtons = this.state.games.map(game => {
            return <Button size={"large"} block>{game['name']}</Button>
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