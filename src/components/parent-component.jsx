import React, { Component } from 'react'
import Child from './child-component'

class Parent extends Component {
    greetHandler=(child)=>{
        alert(`Hello parent from ${child}`)
    }
    render() {
        return (
            <div>
               <Child greetHandler={this.greetHandler}/>
            </div>
        )
    }
}

export default Parent
