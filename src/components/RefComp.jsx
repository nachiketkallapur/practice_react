import React, { Component } from 'react'

class RefComp extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cdRef=null;                    //CAllBack Refs
                                            //React will call the ref callback with a dom element when a component mounts
                                            //and with null whrn a component unmounts
        this.setcdRef = (element)=>{
            this.cdRef=element
        }
    }

        componentDidMount(){
            this.inputRef.current.focus();
            if(this.cdRef){
                this.cdRef.focus()
            }
        }
        clickHandler = () => {
            alert(this.inputRef.current.value);
        }

        render() {
            return (
                <div>
                    <input type='text' ref={this.inputRef} placeholder='Bona' /><br />
                    <input type='text' ref={this.cdRef} placeholder='Napo' /><br />
                    <input type='text' placeholder='Bonaparte' /><br />
                    <button onClick={this.clickHandler}>Click me!</button>
                </div>
            )
        }
    
    }
    export default RefComp
