import React, { Component } from 'react'
import { HomeStyle } from "../Home/styled/home"
import Aside from "../components/aside"
import Content from "../components/content"
import 'element-theme-default'
import tsIcon from '../images/1.jpg';

export default class Home extends Component {
    constructor() {
        super()

    }
    show() {
        var date = new Date();
        var result = "";
        result = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
       
        return (
            <li className="time">{result}</li>
        )
    }

    render() {
        return (
            <HomeStyle>
                <div className="box">
                    <header>
                        <span className="logo">小区管理系统</span>
                        <ul className="topUl">
                            {this.show()}
                            <li ><i className=" el-icon-message"></i><span className="mess">消息</span></li>
                            <li className="img2"><img src={tsIcon} alt="" /></li>
                            <li ><span className="mess">Admin</span><i className=" el-icon-caret-bottom"></i></li>
                        </ul>

                    </header>
                    <div className="content">
                        <div className="left">
                            <Aside />
                        </div>
                        <div className="right">
                            <Content/>
                        </div>
                    </div>
                </div>
            </HomeStyle>
        )
    }

}
