import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    render() {
        return (
            <div>
                <div id="t1">
                    <h2>正在进行</h2>
                    <h5>{this.props.todo.length}</h5>
                </div>
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=>
                            <li key={idx}>
                            {item}
                            <input type="checkbox" checked="" onClick={()=>{this.props.addTodone(idx)}}/>
                            <button onClick={()=>{this.props.delTodo(idx)}}>删除</button>
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}
//检查
Todoing.propTypes = {
    todo: PropTypes.array
}
