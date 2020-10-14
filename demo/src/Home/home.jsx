import React, { Component } from 'react'
import { HomeStyle } from "../Home/styled/home"
import Aside from "../components/aside"
import 'element-theme-default'
import tsIcon from '../images/1.jpg'; 
export default class Home extends Component {
    show() {

        var date = new Date();
        var result = "";
        result = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
        return result;


    }
    render() {
        return (
            <HomeStyle>
                <div className="box">
                    <header>
                        <span className="logo">小区管理系统</span>
                        <i className="img1 el-icon-d-caret"  ></i>
                        <ul className="topUl">
                            <li className="time">{this.show()}</li>
                            <li ><i className=" el-icon-message"></i><span className="mess">消息</span></li>
                            <li className="img2"><img src={tsIcon} alt=""/></li>
                            <li ><span className="mess">Admin</span><i className=" el-icon-caret-bottom"></i></li>
                        </ul>

                    </header>
                    <div className="content">
                        <div className="left">
                            <Aside />
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </HomeStyle>
        )
    }
}
