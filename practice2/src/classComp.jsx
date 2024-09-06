import React from "react";
export class Clcomp extends React.Component{
    render(){
        return <h1>{"Hello class component there"}</h1>
    }
}
export class Clcomp1 extends React.Component{
    constructor(props){
        super(props)
        this.name=props.name
    }
    display(){
        return (this.name);
    }
    render(){
        return (<h1>{this.display()}</h1>)
    }
}