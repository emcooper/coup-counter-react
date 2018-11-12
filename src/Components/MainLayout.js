
import React from 'react';
import { Menu } from 'antd';
import '../index.css';



const MainLayout = () => {
    return (
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Coup Counter</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>

    );
  };

export default MainLayout;