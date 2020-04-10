import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("LifeCycleB constructor")
    }
    static getDerivedStateFromProps=()=>{
        console.log("LifeCycleB getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate=(nextProps,nextState)=>{
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate=(prevProps,prevState)=>{
        console.log("LifeCycleB getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("LifeCycleB componentWillUpdate");
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount");
    }

    
    render() {
        console.log("LifeCycleB render")
        return (
            <div>
                
            </div>
        )
    }
}

export default LifecycleB
