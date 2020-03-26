import React, { Component } from 'react'

class RefComp extends Component {
    constructor(props) {
        super(props);
        
        this.inputRef = React.createRef()
        

    }

    componentDidMount(){
        
        this.inputRef.current.focus()
        
        
    }
    clickHandler =()=>{
        alert(this.inputRef.current.value)
    }
    
    render() {
       
        return (
            <div>
                <input type='text' ref={this.inputRef} placeholder='Napo'/><br/>
                <input type='text'  placeholder='Bona'/><br/>
                <input type='text'  placeholder='Bonaparte'/><br/>
                
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        )
    }
}

export default RefComp
