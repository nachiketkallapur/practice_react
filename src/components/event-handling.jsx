import React, { Component } from 'react'

export class Nachiket extends Component {
    EventHandler(){
        console.log("Nachiket")
    }
    render() {

        return (
            <div>
                <button onClick={()=>console.log("NApoleanBonaparte")}>ClickME!;;;</button>
            </div>
        )
    }
}

export default Nachiket
