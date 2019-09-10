/**
 * Created by apple on 2019/9/7.
 */
import React,{Component} from 'react';

import axios from 'axios';

import {Route,NavLink,Redirect} from 'react-router-dom'

import List from './List'

class Category extends Component{
    constructor(){
        super();
        this.state = {
            list:[]
        };
    }
    componentDidMount(){
        //请求 分类数据
        axios.get('/books2').then((res)=>{
            //存储分类数据到state
            this.setState( {
                list: res.data.list
            } )
        })
    }
    render(){
        
        return (
            <div className="category-box">
                {/*分类导航*/}
                <div className="nav">
                    {
                        this.state.list.length>0 &&
                            this.state.list.map((item,index)=>{
                                return (
                                    <NavLink to={`/home/category/${index}`} key={index}>{item.navTitle}</NavLink>
                                )
                            })
                    }
                </div>

                {/*列表组件*/}
                <Route path="/home/category/:index" component={List}></Route>
                <Redirect to="/home/category/0"></Redirect>

            </div>
        )
    }
}

export default Category;