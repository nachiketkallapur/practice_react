//With React Portal we can mount our component on any DOM node other than root node
//First parameter to ReactDOM.createPoral is the jsx that can rendered

import React from 'react'
import ReactDOM from 'react-dom'
const portalRoot = document.getElementById("portal-root");
function PortalDemo() {
    return ReactDOM.createPortal(
            <h1>Portal Demo</h1>
        ,
        portalRoot
    ) 
}    

export default PortalDemo

