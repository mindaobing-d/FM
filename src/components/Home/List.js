/**
 * Created by apple on 2019/9/7.
 */
import React,{Component} from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';

class List extends Component{
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

        //获取从路由导航传来的 index

        var index = this.props.match.params.index;

        return (
            <div className="list">
                {
                    this.state.list.length>0 &&
                    this.state.list[index].content.map((item,index)=>{
                        return (
                            <Link key={index}  to={{pathname:"/detail",state: item }}>
                                <div className="item">
                                    <div className="pic">
                                        <img src={item.pic} alt=""/>
                                    </div>
                                    <div className="text">
                                        <div>{item.title}</div>
                                        <div>{item.desc}</div>
                                        <div>{item.views}万次</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default List;