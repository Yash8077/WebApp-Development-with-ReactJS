import React, { Component } from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.initialstate={
            name:"Yash",
            age:21
        }
        this.state=this.initialstate;
        this.setState({ name: props.name, age: props.age});
    }

    incrementCount() {
        this.setState({ name:"Yash", age:this.state.age+1 });
    }
    resetCount(){
        this.setState({age:this.state.age-1});
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.age}</p>
                <button onClick={() => this.incrementCount()}>Increment</button>
                <button onClick={() => this.resetCount()}>Reset</button>
            </div>
        );
    }
}

export default MyComponent;