/**
 * Created by apple on 2019/9/7.
 */
import React,{Component} from 'react';

import {connect} from 'react-redux';

import {collect_action,cancel_collect_action} from '../../store/action.js'

class Detail extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{

    }
    render(){

        //获取传来的详情数据
        var item = this.props.location.state;
        console.log(item);

        return (
            <div className="detail-page">
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

                {/*判断当前 Book 是否已收藏*/}
                {
                    this.props.collect_list.find((book)=>{
                        return book.id == item.id
                    })?
                    <div className="btn" onClick={ ()=>{
                        this.props.cancel_collect(item);
                        this.props.history.push('/home/my') ; }
                    }>已收藏</div> :
                    <div className="btn" onClick={ ()=>{
                    this.props.collect(item);
                    this.props.history.push('/home/my') ; }
                    }>收藏</div>
                }
            </div>
        )
    }
}

var newDetail =  connect(
    (state)=>{
        return {
            collect_list: state.collect_list
        }
    },
    (dispatch)=>{
        return {
            //收藏
            collect:(book)=>{
                //触发action
                dispatch( collect_action(book) );
            },
            //取消收藏
            cancel_collect:(book)=>{
                //触发action
                dispatch( cancel_collect_action(book) );
            }

        }
    }
)( Detail );
export default newDetail;