/**
 * Created by apple on 2019/9/7.
 */
import React,{Component} from 'react';

import {Route,NavLink,Redirect} from 'react-router-dom'

import My from './My.js'
import Hot from './Hot.js'
import Category from './Category.js'
import Good from './Good.js'

class Home extends Component{
    constructor(){
        super();
        this.state = {
			
        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="home-page">


                {
                    /*
                    {
                     this.flag == 0 ? <My></My> :''
                     }
                     {
                     this.flag == 1 ? <Hot></Hot> :''
                     }
                     {
                     this.flag == 2 ? <Category></Category> :''
                     }
                     {
                     this.flag == 3 ? <Good></Good> :''
                     }
                    */
                }

                {/*我的,热门,分类,精品*/}
                <div className="nav">
                    <NavLink to="/home/my">我的</NavLink>
                    <NavLink to="/home/hot">热门</NavLink>
                    <NavLink to="/home/category">分类</NavLink>
                    <NavLink to="/home/good">精品</NavLink>
                </div>

                {/*定义路由规则*/}
                <Route path="/home/my" component={My}></Route>
                <Route path="/home/hot" component={Hot}></Route>
                <Route path="/home/category" component={Category}></Route>
                <Route path="/home/good" component={Good}></Route>
                <Redirect to="/home/my"></Redirect>
            </div>
        )
    }
}

export default Home;