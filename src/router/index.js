/**
 * Created by apple on 2019/9/7.
 */

import {Route,Switch,Redirect} from 'react-router-dom'

import React,{Component} from 'react';

import Home from '../components/Home/Home.js'
import Detail from '../components/Detail/Detail.js'
import Collect from '../components/Collect/Collect.js'

class MyRouter extends Component{
    constructor(){
        super();

    }
    render(){
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/collect" component={Collect}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        )
    }
}

export default MyRouter;
