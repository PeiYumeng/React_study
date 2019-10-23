import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todone extends Component {
    render() {
        return (
            <div>
                 <div id="t1">
                    <h2>已经完成</h2>
                    <h5>{this.props.todone.length}</h5>
                </div>
                <ul>
                    {
                        this.props.todone.map((item,idx)=>
                                <li key={idx}>
                                    <input type="checkbox" checked="checked"
                                        onClick={()=>{this.props.readd(idx)}} />
                                 {item}</li>
                            )
                    }
                </ul>
            </div>
        )
    }
}
Todone.defaultProps = {
    name:'lalalla'
}