import React from "react";
import { Layout, Menu as MenuComponent } from 'antd';

export const Menu = () => {
    const { Sider } = Layout;

    return (
        <Sider collapsed>
            <MenuComponent theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <MenuComponent.Item key="1" >
                    Option 1
                </MenuComponent.Item>
                {/*<Menu.Item key="2" icon={<DesktopOutlined />}>*/}
                {/*    Option 2*/}
                {/*</Menu.Item>*/}
                {/*<SubMenu key="sub1" icon={<UserOutlined />} title="User">*/}
                {/*    <Menu.Item key="3">Tom</Menu.Item>*/}
                {/*    <Menu.Item key="4">Bill</Menu.Item>*/}
                {/*    <Menu.Item key="5">Alex</Menu.Item>*/}
                {/*</SubMenu>*/}
                {/*<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">*/}
                {/*    <Menu.Item key="6">Team 1</Menu.Item>*/}
                {/*    <Menu.Item key="8">Team 2</Menu.Item>*/}
                {/*</SubMenu>*/}
                {/*<Menu.Item key="9" icon={<FileOutlined />} />*/}
            </MenuComponent>
        </Sider>
    )
}