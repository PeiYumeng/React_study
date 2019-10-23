import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import Todone from './Todone'
import { throwStatement } from '@babel/types';
export default class Todolist extends Component {
    //初始化
    constructor(){
        super();
        this.state = {
            todo: [],
            todone:[]
        };
    }
    //读存储
    componentDidMount(){
        var t=[],t2=[];  //读存储用
        if(localStorage.getItem('todo'))
            t = localStorage.getItem('todo').split(',');
        if(localStorage.getItem('done'))
            t2 = localStorage.getItem('done').split(',');
        this.setState({
            todo:t,
            todone:t2
        })
    }

    //添加TODO
    addTodo = (msg)=>{
        this.setState({
            todo: [...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',this.state.todo)
        }
    )}
    //获得索引号，已完成
    addTodone = (a)=>{
        var now = this.state.todo[a];
        var todo = [...this.state.todo];
        todo.splice(a,1);    
        this.setState({
            todo:todo,
            todone:[...this.state.todone,now]
        },()=>{
            localStorage.setItem('todo',this.state.todo)
            localStorage.setItem('done',this.state.todone)
        });
    }
    //删除TODO
    delTodo = (a)=>{
        var todo2 = [...this.state.todo];
        todo2.splice(a,1);
        console.log(todo2);
        this.setState({
            todo:todo2,
        },()=>{
            console.log(this.state.todo);
            localStorage.setItem('todo',this.state.todo)
        })

    }
    //返回添加
    readd = (a)=>{
        var now = this.state.todone[a];
        var todo = [...this.state.todo,now];
        var todone = [...this.state.todone];
        todone.splice(a,1);
        this.setState({
            todo:todo,
            todone:todone
        },()=>{
            localStorage.setItem('todo',this.state.todo)
            console.log(todone);
            localStorage.setItem('done',this.state.todone)
        })
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addTodo}/>
                <Todoing readadd={this.readadd} addTodone={this.addTodone} todo={this.state.todo} delTodo={this.delTodo} readd={this.readd}/>
                <Todone  addTodone={this.addTodone} todone={this.state.todone} readd={this.readd}/>
            </div>
        )
    }
}
