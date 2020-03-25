import React, { Component } from 'react'
import LifecycleB from './lifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            showChild: true
        }
        console.log("LifeCycleA constructor")
    }
    clickHandlerForToggleEvents = () => {
        this.setState({ showChild: !this.state.showChild });
    }

    clickHandlerForShowChild = () => {
        this.setState({ text: this.state.text + "Nachiket" });
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null;
    }
    componentDidMount = () => {
        console.log("LifecycleA componentDidMount")
    }

    componentDidUpdate = () => {
        console.log("LifecycleA componentDidUpdate")
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapsotBeforeUpdate")
        return null
    }


    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <button onClick={this.clickHandlerForToggleEvents}>Toggle events</button><br />
                <button onClick={this.clickHandlerForShowChild}>ShowChild</button>
                <h3>{this.state.showChild ? this.state.text : ''}</h3>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
