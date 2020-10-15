import React, { Component } from 'react'
import { Route } from "react-router-dom";
import CellList from "../pages/cellList"
// import Home from "../Home/home"
import Animal from "../pages/animal"
import Car from "../pages/car"
import Chewei from "../pages/chewei"
import CheweiUse from "../pages/cheweiUse"
import Dongshu from "../pages/dongshu"
import Fangchan from "../pages/fangchan"
import People from "../pages/people"
import Shoufei from "../pages/shoufei"
import Zichan from "../pages/zichan"
export default class content extends Component {
    render = () => (
        <div>
            <Route path="/CellList" component={CellList} />
            <Route path="/Animal" component={Animal} />
            <Route path="/Car" component={Car} />
            <Route path="/Chewei" component={Chewei} />
            <Route path="/CheweiUse" component={CheweiUse} />
            <Route path="/Dongshu" component={Dongshu} />
            <Route path="/Fangchan" component={Fangchan} />
            <Route path="/People" component={People} />
            <Route path="/Shoufei" component={Shoufei} />
            <Route path="/Zichan" component={Zichan} />
        </div>
       
    )


}
