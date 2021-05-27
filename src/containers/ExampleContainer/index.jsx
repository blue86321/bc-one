import React, { Component } from 'react'

import {connect} from 'react-redux'
import {add, asyncAdd} from '../../redux/actions/test'


class ExampleContainer extends Component {
    
    increment = () => {
        this.props.add(1)
    }

    asyncIncrement = () => {
        this.props.asyncAdd(1)
    }
    
    render() {
        return (
            <div>
                ExampleContainer...
                <h2>{this.props.test}</h2>
                <button onClick={this.increment}>AddOne</button>
                <button onClick={this.asyncIncrement}>AddOne aysnc</button>
                
            </div>
        )
    }
}

export default connect(
    // state
    state => ({test: state.test}),
    // method to operate state
    {
        add,
        asyncAdd,
    }
)(ExampleContainer)
