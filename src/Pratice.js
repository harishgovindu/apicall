import React, { Component } from 'react'

export default class Pratice extends Component {
    constructor(props) {
        super(props)
        this.state = {
           count:0
       }
        
    }
    onIncrese = () => {
            this.setState({
                count: this.state.count+1
            }

            )
    }
     ondecrese = () => {
            this.setState({
                count: this.state.count- 1
            }

            )
        }
    render() {
        
        return (
            <div>
                <button onClick={this.onIncrese}>Increment</button>
                <button onClick={this.ondecrese}>Decrement</button>
                <h1>{ this.state.count}</h1>
            </div>
        )
    }
}
