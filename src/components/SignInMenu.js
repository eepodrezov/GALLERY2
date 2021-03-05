import React from 'react'
import { Menu, Input, Button } from 'antd';
import { LoginOutlined  } from '@ant-design/icons';

const { SubMenu } = Menu;

class SignInMenu extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<LoginOutlined />} title="Sign In">
                        <Menu.Item key="1">
                            <Input placeholder="Login" />
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Input placeholder="Password" />
                        </Menu.Item>
                        <Button type="primary" style={{'margin': '0 5px 5px 20px', width:'40%'}}>Sign In</Button>
                        <Button style={{'margin': '0 5px 5px 5px',width:'40%'}}>Register</Button>
                </SubMenu>
            </Menu>
        );
    }
}

export default SignInMenu;