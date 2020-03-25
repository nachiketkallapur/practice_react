import React, { Component } from 'react'

class RefComp extends Component {
    constructor(props) {
        super(props);
        
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        console.log(this.inputRef)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} placeholder='Napo'/>
            </div>
        )
    }
}

export default RefComp
