import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {   //设置默认值
            n: ''
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){   //回车
            this.props.addTodo(e.target.value);
            var d = document.getElementById('inp');
            console.log(d);
            d.value = '';
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div id="top">
                <label htmlFor="inp">ToDoList &nbsp;&nbsp;</label>
                <input id="inp" name="n" 
                onChange={this.handleChange} value={this.state.n1} 
                onKeyDown={(e)=>this.handleInput(e)} placeholder="添加Todo" type="text"/>
            </div>
        )
    }
}
