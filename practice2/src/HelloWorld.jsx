import React from 'react'
import { Component } from 'react';

export default class HelloWorld extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Hello world"
        }
    };
    toggleText = () => {
        this.setState({
            name: "bye bye world"
        })
    };
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.toggleText}>Toggle Text</button>
            </div>
        );
    }
}
