/**
 * Created by apple on 2019/9/7.
 */
import React,{Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class My extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="box">
                <div className="list">
                    {/*渲染从redux注入的 收藏列表*/}
                    {
                        this.props.collect_list.length>0 &&
                        this.props.collect_list.map((item,index)=>{
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
            </div>
        )
    }
}

var newMy =  connect(
    (state)=>{
        return {
            collect_list: state.collect_list
        }
    },
    (dispatch)=>{
        return {

        }
    }
)( My );

export default newMy;