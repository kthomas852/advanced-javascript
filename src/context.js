import React, { Component } from 'react'
import ContextChild from './contextChild'
//import {bind2} from '../lecture/context.js'

function bind2(obj, fn){
    return function (){
       return fn.apply(obj, arguments)
    }
  }

export class Context extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    //Arrow functions DO NOT work with bind(this)
    //this.onClick = this.onClick.bind2(this)
    this.onClick = bind2(this, this.onClick)
    //Bind is a CLOSURE
  }
  onClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  render() {
    return (
      <div>
        <h1>Context</h1>
        <ContextChild onClick={this.onClick} />
        <div>Counter: {this.state.counter}</div>
      </div>
    )
  }
}

export default Context