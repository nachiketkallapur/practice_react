import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log("RegularComponent");
        return (
            <div>
                RegularComponent {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
