import React, { Component } from 'react'

import { Menu, Layout } from 'element-react';
import { AsideStyle } from "../components/styled/aside"
import 'element-theme-default';
import tsIcon from '../images/1.jpg'; 
export default class Aside extends Component {
    onOpen() {

    }

    onClose() {

    }

    render() {
        return (
            <AsideStyle>
                <div className="box1">
                    <div className="img2"><img src={tsIcon} alt=""/></div>
                    <span className="txt">你好!Adim，欢迎回来</span>
                    <Layout.Row className="tac">
                        <Layout.Col span={8}>
                            <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                                <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>小区管理</span>}>
                                    
                                        <Menu.Item index="1-1">小区列表</Menu.Item>
                                </Menu.SubMenu>
                                
                                <Menu.SubMenu index="2" title={<span><i className="el-icon-message"></i>房产管理</span>}>
                                    
                                    <Menu.Item index="2-1">房产管理</Menu.Item>
                                    <Menu.Item index="2-2">栋数管理</Menu.Item>
                                </Menu.SubMenu>
                                
                                <Menu.SubMenu index="3" title={<span><i className="el-icon-message"></i>业主信息管理</span>}>
                                    
                                    <Menu.Item index="3-1">人员管理</Menu.Item>
                                    <Menu.Item index="3-2">车辆管理</Menu.Item>
                                    <Menu.Item index="3-3">宠物管理</Menu.Item>
                                </Menu.SubMenu>

                                <Menu.SubMenu index="4" title={<span><i className="el-icon-message"></i>停车位管理</span>}>
                                    
                                    <Menu.Item index="4-1">车位管理</Menu.Item>
                                    <Menu.Item index="4-2">车位使用管理</Menu.Item>
                                </Menu.SubMenu>

                                <Menu.SubMenu index="5" title={<span><i className="el-icon-message"></i>资产管理</span>}>
                                    
                                    <Menu.Item index="5-1">资产设备列表</Menu.Item>
                                   
                                </Menu.SubMenu>

                                <Menu.SubMenu index="6" title={<span><i className="el-icon-message"></i>收费管理</span>}>
                                    
                                    <Menu.Item index="6-1">收费项目</Menu.Item>
                                   
                                </Menu.SubMenu>
                            </Menu>
                            
                        </Layout.Col>
                    </Layout.Row>
                </div>
            </AsideStyle>
        )
    }
}
