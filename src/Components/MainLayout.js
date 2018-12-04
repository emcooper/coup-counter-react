
import React from 'react';
import { Menu } from 'antd';
import '../index.css';
import { Link } from 'react-router-dom';



class MainLayout extends React.Component {

  state = {
    current: '1',
  }

  constructor(props) {
    super(props);
}


  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }


  render (){

    return (
      
      <Menu
        theme="light"
        mode="horizontal"
        // defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
      >
      
        <Menu.Item key="1">
        <Link to="/">Coup Counter</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/enter">Enter Game</Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to="/stats">Stats</Link>
        </Menu.Item>
      </Menu>

      );
  }
}


export default MainLayout;