import React from 'react'

function PureComp(props) {
    console.log("PureComponent")
    return (
        <div>
            PureComponent {props.name}
        </div>
    )
}

export default React.memo(PureComp)